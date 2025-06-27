import { BoltIcon, HistoryIcon, HouseIcon, SunIcon } from "lucide-react";
import styles from "./styles.module.css";

export function Menu() {
  return (
    <nav className={styles.menu}>
      <a className={styles["menu-link"]} href="">
        <HouseIcon strokeWidth={2.5} />
      </a>
      <a className={styles["menu-link"]} href="">
        <HistoryIcon strokeWidth={2.5} />
      </a>
      <a className={styles["menu-link"]} href="">
        <BoltIcon strokeWidth={2.5} />
      </a>
      <a className={styles["menu-link"]} href="">
        <SunIcon strokeWidth={2.5} />
      </a>
    </nav>
  );
}
