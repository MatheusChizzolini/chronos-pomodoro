import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import styles from "./styles.module.css";

export function Cycles() {
  const { state } = useTaskContext();
  const cycleSteps = Array.from({ length: state.currentCycle });

  return (
    <div className={styles.cycles}>
      <span>Ciclos:</span>

      <div className={styles.circles}>
        {cycleSteps.map((_, index) => {
          const nextCycle = getNextCycle(index);
          const nextCycleType = getNextCycleType(nextCycle);
          return (
            <span
              key={nextCycle} // Sempre necessário para retornar um elemento html num map
              className={`${styles.circle} ${styles[nextCycleType]}`}
              aria-label="Indicador de ciclos"
              title={
                nextCycleType === "workTime"
                  ? "Foco"
                  : nextCycleType === "shortBreakTime"
                  ? "Descanso curto"
                  : "Descanso longo"
              }
            ></span>
          );
        })}
      </div>
    </div>
  );
}
