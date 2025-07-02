import { Input } from "../Input";
import { Cycles } from "../Cycles";
import { Button } from "../Button";
import { CirclePlayIcon } from "lucide-react";
import type { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import { useRef } from "react";
import styles from "./styles.module.css";
import { formatSecondsToMinutes } from "../../utils/formatSecondsToMinutes";

export function MainForm() {
  const { state, setState } = useTaskContext();
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

        const secondsRemaining = newTask.duration * 60;
        setState((prevState) => {
          return {
            ...prevState, // Sempre copiar um objeto ou array com spread operator quando for mudar seu valor
            activeTask: newTask,
            currentCycle: nextCycle,
            secondsRemaining: secondsRemaining,
            formattedSecondsRemaining: formatSecondsToMinutes(secondsRemaining),
            tasks: [...prevState.tasks, newTask],
            config: { ...prevState.config },
          };
        });
      } else {
        alert("Digite o nome da tarefa!");
      }
    }
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
        />
      </div>

      <div className={styles["form-row"]}>
        <p>Lorem ipsum dolor sit amet consectetur.</p>
      </div>

      <div className={styles["form-row"]}>
        <Cycles />
      </div>

      <div className={styles["form-row"]}>
        <Button icon={<CirclePlayIcon size={32} />} />
      </div>
    </form>
  );
}
