import { Input } from "../Input";
import { Cycles } from "../Cycles";
import { Button } from "../Button";
import { CirclePlayIcon, StopCircleIcon } from "lucide-react";
import type { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycleType } from "../../utils/getNextCycleType";
import styles from "./styles.module.css";
import { useRef } from "react";
import { getNextCycle } from "../../utils/getNextCycle";
import { Tips } from "../Tips";

export function MainForm() {
  const { state, dispatch } = useTaskContext();
  // State para validações em tempo real, causa re-renderização (input controlado)
  // Ref para apenas armazenar, não causa re-renderização (input não controlado)
  const taskNameInput = useRef<HTMLInputElement>(null);
  const nextCycle = getNextCycle(state.currentCycle);
  const nextCycleType = getNextCycleType(nextCycle);

  function handleCreateTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (taskNameInput.current !== null) {
      const taskName = taskNameInput.current.value.trim();

      if (taskName) {
        const newTask: TaskModel = {
          id: Date.now().toString(),
          taskName: taskName,
          duration: state.config[nextCycleType],
          startDate: Date.now(),
          completeDate: null,
          interruptDate: null,
          type: nextCycleType,
        };

        dispatch({ type: "START_TASK", payload: newTask });
      } else {
        alert("Digite o nome da tarefa!");
      }
    }
  }

  function handleStopTask() {
    dispatch({ type: "INTERRUPT_TASK" });
  }

  return (
    <form onSubmit={handleCreateTask} className={styles.form} action="">
      <div className={styles["form-row"]}>
        <Input
          id="input"
          type="text"
          label="Tarefa"
          placeholder="Ex: Estudar ED2"
          ref={taskNameInput}
          disabled={!!state.activeTask} // Trasforma em boolean, null é false
        />
      </div>

      <div className={styles["form-row"]}>
        <Tips nextCycleType={nextCycleType} />
      </div>

      {state.currentCycle > 0 && (
        <div className={styles["form-row"]}>
          <Cycles />
        </div>
      )}

      <div className={styles["form-row"]}>
        {state.activeTask && (
          <Button
            aria-label="Parar tarefa"
            title="Parar tarefa"
            color="blue"
            type="button"
            icon={<StopCircleIcon size={32} />}
            onClick={handleStopTask}
          />
        )}

        {!state.activeTask && (
          <Button
            aria-label="Começar tarefa"
            title="Começar tarefa"
            type="submit"
            icon={<CirclePlayIcon size={32} />}
          />
        )}
      </div>
    </form>
  );
}
