import React, { createContext, FC } from "react";
import { IBeobleState } from "./types";

const defaultState: IBeobleState = {};

const BeobleContext = createContext(defaultState);

export const BeobleProvider: FC<IBeobleState> = ({ children }) => {
  return <BeobleContext.Provider value={{}}>{children}</BeobleContext.Provider>;
};

export const withBeoble = () => {};
