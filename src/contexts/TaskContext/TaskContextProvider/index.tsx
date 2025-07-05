import { useEffect, useReducer } from "react";
import { initialTaskState } from "../initialTaskState";
import { TaskContext } from "../TaskContext";
import { taskReducer } from "../taskReducer";
import { TimerWorkerManager } from "../../../workers/timerWorkerManager";

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState);
  const worker = TimerWorkerManager.getInstance();

  worker.onmessage((e) => {
    const countDownSeconds = e.data;
    console.log(countDownSeconds);

    if (countDownSeconds <= 0) {
      console.log("Completo");
      worker.terminate();
    }
  });

  useEffect(() => {
    if (!state.activeTask) {
      console.log("Terminando");
      worker.terminate();
    }
    worker.postMessage(state);
  }, [state, worker]);

  // Provider provê o valor para todos os componentes que estão dentro desse contexto
  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}
