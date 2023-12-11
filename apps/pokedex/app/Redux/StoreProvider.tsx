"use client";

import { FC, ReactNode } from "react";
import { Provider } from "react-redux";
import store from "./store";

type Props = { children: ReactNode };
console.log("store", store);

export const StoreProvider: FC<Props> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
