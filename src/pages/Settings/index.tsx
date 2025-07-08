import { SaveIcon } from "lucide-react";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { Heading } from "../../components/Heading";
import { Input } from "../../components/Input";
import { MainTemplate } from "../../templates/MainTemplate";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { showMessage } from "../../adapters/toastifyAdapter";
import { useRef } from "react";
import styles from "./styles.module.css";

export function Settings() {
  const { state } = useTaskContext();
  const workTimeInput = useRef<HTMLInputElement>(null);
  const shortBreakTimeInput = useRef<HTMLInputElement>(null);
  const longBreakTimeInput = useRef<HTMLInputElement>(null);

  function handleSaveSettings(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const workTime = Number(workTimeInput.current?.value);
    const shortBreakTime = Number(shortBreakTimeInput.current?.value);
    const longBreakTime = Number(longBreakTimeInput.current?.value);
    const formErrors = [];

    if (isNaN(workTime) || isNaN(shortBreakTime) || isNaN(longBreakTime)) {
      formErrors.push("Digite apenas números nos campos!");
    }

    if (workTime < 1 || workTime > 99) {
      formErrors.push("Digite um número entre 1 e 99 para foco!");
    }

    if (shortBreakTime < 1 || shortBreakTime > 30) {
      formErrors.push("Digite um número entre 1 e 30 para descanso curto!");
    }

    if (longBreakTime < 1 || longBreakTime > 60) {
      formErrors.push("Digite um número entre 1 e 99 para descanso longo!");
    }

    if (formErrors.length > 0) {
      formErrors.forEach((error) => {
        showMessage.warning(error);
      });
    } else {
      console.log("Em viado");
    }
  }

  return (
    <MainTemplate>
      <Container>
        <Heading>Configurações</Heading>
      </Container>

      <Container>
        <p style={{ textAlign: "center", fontWeight: "600" }}>
          Configure e personalize os pomodoros do seu jeito.
        </p>
      </Container>

      <Container>
        <form onSubmit={handleSaveSettings} className={styles.form} action="">
          <div className={styles["form-row"]}>
            <Input
              id="workTime"
              label="Foco"
              type="number"
              ref={workTimeInput}
              defaultValue={state.config.workTime}
            />
          </div>

          <div className={styles["form-row"]}>
            <Input
              id="shortBreakTime"
              label="Descanso curto"
              type="number"
              ref={shortBreakTimeInput}
              defaultValue={state.config.shortBreakTime}
            />
          </div>

          <div className={styles["form-row"]}>
            <Input
              id="longBreakTime"
              label="Descanso longo"
              type="number"
              ref={longBreakTimeInput}
              defaultValue={state.config.longBreakTime}
            />
          </div>

          <div className={styles["form-row"]}>
            <Button
              icon={<SaveIcon size={32} />}
              aria-label="Salvar configurações"
              title="Salvar configurações"
              type="submit"
            />
          </div>
        </form>
      </Container>
    </MainTemplate>
  );
}
