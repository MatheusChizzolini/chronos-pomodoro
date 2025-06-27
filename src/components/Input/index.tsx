import styles from "./styles.module.css";

type InputProps = {
  id: string;
  label: string;
} & React.ComponentProps<"input">; // Intersection, combina dois tipos para aceitar as props do input html

export function Input({ id, type, label, ...rest }: InputProps) {
  return (
    <>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input className={styles.input} id={id} type={type} {...rest} />
    </>
  );
}
