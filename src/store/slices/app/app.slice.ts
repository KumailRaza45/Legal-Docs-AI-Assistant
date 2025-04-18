/**
 * @file Contains the app slice of the app store state.
 * Here the slice is initialized.
 */

import { createSlice } from "@reduxjs/toolkit";
import { AppSliceState } from "./app.types";

export const appInitialState: AppSliceState = {};

const appSlice = createSlice({
  name: "app",
  initialState: appInitialState,
  reducers: {},
});

export const appActions = appSlice.actions;
export const appReducer = appSlice.reducer;
