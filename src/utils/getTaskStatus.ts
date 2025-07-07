import type { TaskModel } from "../models/TaskModel";

export function getTaskStatus(task: TaskModel, activeTask: TaskModel | null) {
  if (task.completeDate) {
    return "Completa";
  } else if (task.interruptDate) {
    return "Interrompida";
  } else if (task.id === activeTask?.id) {
    return "Em progresso";
  } else {
    return "Abandonada";
  }
}
