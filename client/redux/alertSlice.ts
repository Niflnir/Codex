import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";

// Type for our state
export interface AlertState {
  alertState: boolean;
}

// Initial state
const initialState: AlertState = {
  alertState: false,
};

// Actual Slice
export const alertSlice = createSlice({
  name: "isAlert",
  initialState,
  reducers: {
    // Action to set the authentication status
    setAlertState(state, action) {
      state.alertState = action.payload;
    },
  },
});

export const { setAlertState } = alertSlice.actions;

export const selectAlertState = (state: AppState) => state.isAlert.alertState;

export default alertSlice.reducer;
