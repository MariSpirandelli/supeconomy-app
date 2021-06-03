import { Dispatch, SetStateAction } from "react";
import { SEActionHandlerMap } from "./SEActions";
import { SEStateType } from "./SEStateType";

export interface CancelableType {
  cancel: () => void;
}

export type Async = () => Promise<any>;
export type WrappedAsync = (fn: Async) => Promise<any>;
export type SEType = {
  state: SEStateType;
  setState: Dispatch<SetStateAction<SEStateType>>;
  actions: SEActionHandlerMap;
};
