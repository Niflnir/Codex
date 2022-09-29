import { createSlice } from "@reduxjs/toolkit";
import { AppState } from "./store";

// Type for our state
export interface LoadingState {
  loadingState: boolean;
}

// Initial state
const initialState: LoadingState = {
  loadingState: true,
};

// Actual Slice
export const loadingSlice = createSlice({
  name: "isLoading",
  initialState,
  reducers: {

    // Action to set the authentication status
    setLoadingState(state, action) {
      state.loadingState = action.payload;
    },

  },
});

export const { setLoadingState } = loadingSlice.actions;

export const selectLoadingState = (state: AppState) => state.isLoading.loadingState;

export default loadingSlice.reducer;
