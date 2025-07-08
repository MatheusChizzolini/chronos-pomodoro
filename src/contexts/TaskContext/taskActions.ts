import type { TaskModel } from "../../models/TaskModel";
import type { TaskStateModel } from "../../models/TaskStateModel";

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
    }
  | {
      type: "COUNT_DOWN";
      payload: { secondsRemaining: number };
    }
  | {
      type: "COMPLETE_TASK";
    }
  | {
      type: "CHANGE_SETTINGS";
      payload: TaskStateModel["config"];
    };
