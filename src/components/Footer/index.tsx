import { RouterLink } from "../RouterLink";
import styles from "./styles.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <RouterLink href="/sobre-pomodoro">Entenda a técnica Pomodoro</RouterLink>
      <a href="">Matheus Chizzolini &copy; {new Date().getFullYear()}</a>
    </footer>
  );
}
