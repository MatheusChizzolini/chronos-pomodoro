import styles from "./styles.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <a href="">Entenda a técnica Pomodoro</a>
      <a href="">Matheus Chizzolini &copy; {new Date().getFullYear()}</a>
    </footer>
  );
}
