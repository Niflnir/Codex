import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";

// Type for our state
export interface AlertMessageState {
  alertMessageState: string;
}

// Initial state
const initialState: AlertMessageState = {
  alertMessageState: "",
};

// Actual Slice
export const alertMessageSlice = createSlice({
  name: "isAlertMessage",
  initialState,
  reducers: {
    // Action to set the authentication status
    setAlertMessageState(state, action) {
      state.alertMessageState = action.payload;
    },
  },
});

export const { setAlertMessageState } = alertMessageSlice.actions;

export const selectAlertMessageState = (state: AppState) =>
  state.isAlertMessage.alertMessageState;

export default alertMessageSlice.reducer;
