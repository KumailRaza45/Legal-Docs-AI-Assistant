/**
 * @file Contains the auth slice of the app store state.
 * Here the slice is initialized.
 */

import { createSlice } from "@reduxjs/toolkit";
import { AuthSliceState } from "./auth.types";

export const authInitialState: AuthSliceState = {
  userInfo: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: authInitialState,
  reducers: {
    logout(state: AuthSliceState) {
      localStorage.clear();
      state.userInfo = null;
    },
  },
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
