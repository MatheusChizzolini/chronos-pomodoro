import styles from "./styles.module.css";

type ButtonProps = {
  icon: React.ReactNode;
  color?: "red" | "blue";
} & React.ComponentProps<"button">;

export function Button({ icon, color = "red", ...props }: ButtonProps) {
  return (
    <>
      <button className={`${styles.button} ${styles[color]}`} {...props}>
        {icon}
      </button>
    </>
  );
}
