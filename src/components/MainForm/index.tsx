import { Input } from "../Input";
import { Cycles } from "../Cycles";
import { Button } from "../Button";
import { CirclePlayIcon } from "lucide-react";

import styles from "./styles.module.css";

export function MainForm() {
  return (
    <form className={styles.form} action="">
      <div className={styles["form-row"]}>
        <Input
          id="input"
          type="text"
          label="Tarefa"
          placeholder="Ex: Estudar ED2"
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
