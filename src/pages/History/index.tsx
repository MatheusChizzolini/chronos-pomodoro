import { TrashIcon } from "lucide-react";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";
import { MainTemplate } from "../../templates/MainTemplate";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { formatDate } from "../../utils/formatDate";
import { getTaskStatus } from "../../utils/getTaskStatus";
import styles from "./styles.module.css";

export function History() {
  const { state } = useTaskContext();
  const sortedTasks = [...state.tasks].sort((a, b) => {
    return b.startDate - a.startDate;
  });

  return (
    <MainTemplate>
      <Container>
        <Heading>
          <span>Histórico</span>
          <span className={styles["button-container"]}>
            <Button
              aria-label="Apagar histórico"
              title="Apagar histórico"
              icon={<TrashIcon size={20} strokeWidth={2.5} />}
            />
          </span>
        </Heading>
      </Container>

      <Container>
        <div className={styles["responsive-table"]}>
          <table>
            <thead>
              <tr>
                <th>Tarefa</th>
                <th>Duração</th>
                <th>Data</th>
                <th>Status</th>
                <th>Tipo</th>
              </tr>
            </thead>
            <tbody>
              {sortedTasks.map((task) => {
                return (
                  <tr key={task.id}>
                    <td>{task.name}</td>
                    <td>{task.duration} minuto(s)</td>
                    <td>{formatDate(task.startDate)}</td>
                    <td>{getTaskStatus(task, state.activeTask)}</td>
                    <td>
                      {task.type === "workTime"
                        ? "Foco"
                        : task.type === "shortBreakTime"
                        ? "Descanso curto"
                        : "Descanso longo"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Container>
    </MainTemplate>
  );
}
