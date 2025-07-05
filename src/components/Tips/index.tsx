import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import type { TaskStateModel } from "../../models/TaskStateModel";

type TipsProps = {
  nextCycleType: keyof TaskStateModel["config"];
};

export function Tips({ nextCycleType }: TipsProps) {
  const { state } = useTaskContext();

  const tipsForActiveTask = {
    workTime: <span>Foque por: {state.config.workTime} minutos</span>,
    shortBreakTime: (
      <span>Descanse por: {state.config.shortBreakTime} minutos</span>
    ),
    longBreakTime: (
      <span>Descanse por: {state.config.longBreakTime} minutos</span>
    ),
  };

  const tipsForNoActiveTask = {
    workTime: <span>Próximo ciclo: {state.config.workTime} minutos</span>,
    shortBreakTime: (
      <span>Próximo ciclo: {state.config.shortBreakTime} minutos</span>
    ),
    longBreakTime: (
      <span>Próximo ciclo: {state.config.longBreakTime} minutos</span>
    ),
  };

  return (
    <>
      {state.activeTask && tipsForActiveTask[state.activeTask.type]}
      {!state.activeTask && tipsForNoActiveTask[nextCycleType]}
    </>
  );
}
