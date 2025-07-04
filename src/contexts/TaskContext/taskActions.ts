import type { TaskModel } from "../../models/TaskModel";

export type TaskActionModel =
  | {
      type: "START_TASK";
      payload: TaskModel;
    }
  | {
      type: "INTERRUPT_TASK";
    }
  | {
      type: "RESET_STATE";
    };
