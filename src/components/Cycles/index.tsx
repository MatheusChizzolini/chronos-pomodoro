import styles from "./styles.module.css";

export function Cycles() {
  return (
    <div className={styles.cycles}>
      <span>Ciclos:</span>

      <div className={styles.circles}>
        <span className={`${styles.circle} ${styles["work-time"]}`}></span>
        <span
          className={`${styles.circle} ${styles["short-break-time"]}`}
        ></span>
        <span className={`${styles.circle} ${styles["work-time"]}`}></span>
        <span
          className={`${styles.circle} ${styles["short-break-time"]}`}
        ></span>
        <span className={`${styles.circle} ${styles["work-time"]}`}></span>
        <span
          className={`${styles.circle} ${styles["short-break-time"]}`}
        ></span>
        <span className={`${styles.circle} ${styles["work-time"]}`}></span>
        <span
          className={`${styles.circle} ${styles["long-break-time"]}`}
        ></span>
      </div>
    </div>
  );
}
