import { userData } from "./userDataType";

export interface userDataSchema {
  isLoading: boolean;
  error?: string;
  data?: userData;
}
