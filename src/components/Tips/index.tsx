import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import type { TaskStateModel } from "../../models/TaskStateModel";

type TipsProps = {
  nextCycleType: keyof TaskStateModel["config"];
};

export function Tips({ nextCycleType }: TipsProps) {
  const { state } = useTaskContext();

  const tipsForActiveTask = {
    workTime: <span>Foque por: {state.config.workTime} minuto(s)</span>,
    shortBreakTime: (
      <span>Descanse por: {state.config.shortBreakTime} minuto(s)</span>
    ),
    longBreakTime: (
      <span>Descanse por: {state.config.longBreakTime} minuto(s)</span>
    ),
  };

  const tipsForNoActiveTask = {
    workTime: <span>Próximo foco: {state.config.workTime} minuto(s)</span>,
    shortBreakTime: (
      <span>Próximo descanso: {state.config.shortBreakTime} minuto(s)</span>
    ),
    longBreakTime: (
      <span>Próximo descanso: {state.config.longBreakTime} minuto(s)</span>
    ),
  };

  return (
    <>
      {state.activeTask && tipsForActiveTask[state.activeTask.type]}
      {!state.activeTask && tipsForNoActiveTask[nextCycleType]}
    </>
  );
}
