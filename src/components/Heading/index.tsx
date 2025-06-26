import styles from "./styles.module.css";

type HeadingProps = {
  children: React.ReactNode; // Este tipo contém tudo o que o React aceita como children
};

export function Heading({ children }: HeadingProps) {
  return <h1 className={styles.heading}>{children}</h1>;
}
