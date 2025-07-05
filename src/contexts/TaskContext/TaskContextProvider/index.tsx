import { useEffect, useReducer, useRef } from "react";
import { initialTaskState } from "../initialTaskState";
import { TaskContext } from "../TaskContext";
import { taskReducer } from "../taskReducer";
import { TimerWorkerManager } from "../../../workers/timerWorkerManager";
import { loadBeep } from "../../../utils/loadBeep";

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState);
  const worker = TimerWorkerManager.getInstance();
  const playBeepRef = useRef<() => void | null>(null);

  worker.onmessage((e) => {
    const countDownSeconds = e.data;

    if (countDownSeconds <= 0) {
      if (playBeepRef.current) {
        playBeepRef.current();
        playBeepRef.current = null;
      }

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

  useEffect(() => {
    if (state.activeTask && playBeepRef.current === null) {
      playBeepRef.current = loadBeep();
    } else {
      playBeepRef.current = null;
    }
  }, [state.activeTask]);

  // Provider provê o valor para todos os componentes que estão dentro desse contexto
  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}
