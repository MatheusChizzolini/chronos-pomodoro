import { toast } from "react-toastify";

// O adapter serve para quando for usar libs externas, para não ter que dar manutenção no código todo, apenas no adapter
export const showMessage = {
  success: (message: string) => toast.success(message),
  error: (message: string) => toast.error(message),
  warn: (message: string) => toast.warn(message),
  warning: (message: string) => toast.warning(message),
  info: (message: string) => toast.info(message),
};
