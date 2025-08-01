import { useEffect, useReducer, useRef } from "react";
import { initialTaskState } from "../initialTaskState";
import { TaskContext } from "../TaskContext";
import { taskReducer } from "../taskReducer";
import { TimerWorkerManager } from "../../../workers/timerWorkerManager";
import { loadBeep } from "../../../utils/loadBeep";
import type { TaskStateModel } from "../../../models/TaskStateModel";

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState, () => {
    const storageState = localStorage.getItem("state");

    if (storageState === null) {
      return initialTaskState;
    } else {
      const parseStorageState = JSON.parse(storageState) as TaskStateModel;
      return {
        ...parseStorageState,
        activeTask: null,
        secondsRemaining: 0,
        formattedSecondsRemaining: "00:00",
      };
    }
  });

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
    localStorage.setItem("state", JSON.stringify(state));

    if (!state.activeTask) {
      worker.terminate();
    }
    if (state.formattedSecondsRemaining !== "00:00") {
      document.title = `${state.formattedSecondsRemaining} | Chronos Pomodoro`;
    } else {
      document.title = "Chronos Pomodoro";
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
