import {
  BoltIcon,
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SunIcon,
} from "lucide-react";
import { useEffect, useState } from "react";
import styles from "./styles.module.css";

type Themes = "dark" | "light";

export function Menu() {
  const [theme, setTheme] = useState<Themes>(() => {
    // Lazy initialization, define o estado inicial apenas na montagem do componente
    const storageTheme = (localStorage.getItem("theme") as Themes) || "dark"; // Caso não tenha nada no local storage, inicializa como "dark"
    return storageTheme;
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent> // Em toda função "on" um evento é capturado, esse é o tipo do evento
  ) {
    event.preventDefault(); // Nesse caso não vai para o link do href
    setTheme((prevTheme) => {
      const nextTheme = prevTheme === "dark" ? "light" : "dark";
      return nextTheme; // Essa função pega o estado anterior do componente, e o que ela retorna é o novo estado
    });
  }

  return (
    <nav className={styles.menu}>
      <a
        className={styles["menu-link"]}
        href=""
        aria-label="Ir para a Home"
        title="Ir para a Home"
      >
        <HouseIcon strokeWidth={2.5} />
      </a>

      <a
        className={styles["menu-link"]}
        href=""
        aria-label="Ver histórico"
        title="Ver histórico"
      >
        <HistoryIcon strokeWidth={2.5} />
      </a>

      <a
        className={styles["menu-link"]}
        href=""
        aria-label="Configurações"
        title="Configurações"
      >
        <BoltIcon strokeWidth={2.5} />
      </a>

      <a
        className={styles["menu-link"]}
        href=""
        aria-label="Mudar tema"
        title="Mudar tema"
        onClick={handleThemeChange}
      >
        {theme === "dark" ? (
          <SunIcon strokeWidth={2.5} />
        ) : (
          <MoonIcon strokeWidth={2.5} />
        )}
      </a>
    </nav>
  );
}
