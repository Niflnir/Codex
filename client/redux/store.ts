import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { loadingSlice } from "./loadingSlice";
import { createWrapper } from "next-redux-wrapper";
import { alertSlice } from "./alertSlice";
import { alertMessageSlice } from "./alertMessageSlice";

const makeStore = () =>
  configureStore({
    reducer: {
      [alertSlice.name]: alertSlice.reducer,
      [alertMessageSlice.name]: alertMessageSlice.reducer,
      [loadingSlice.name]: loadingSlice.reducer,
    },
    devTools: true,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);
