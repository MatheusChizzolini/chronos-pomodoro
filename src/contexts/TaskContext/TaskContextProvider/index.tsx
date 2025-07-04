import { useEffect, useReducer } from "react";
import { initialTaskState } from "../initialTaskState";
import { TaskContext } from "../TaskContext";
import { taskReducer } from "../taskReducer";

type TaskContextProviderProps = {
  children: React.ReactNode;
};

export function TaskContextProvider({ children }: TaskContextProviderProps) {
  const [state, dispatch] = useReducer(taskReducer, initialTaskState);

  useEffect(() => {
    console.log(state);
  }, [state]);

  // Provider provê o valor para todos os componentes que estão dentro desse contexto
  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}
