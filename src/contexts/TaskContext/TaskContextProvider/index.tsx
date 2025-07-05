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
      dispatch({ type: "COMPLETE_TASK" });
      worker.terminate();
    } else {
      dispatch({
        type: "COUNT_DOWN",
        payload: { secondsRemaining: countDownSeconds },
      });
    }
  });

  useEffect(() => {
    if (!state.activeTask) {
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
