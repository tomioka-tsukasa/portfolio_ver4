import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import React from "react";

type InitialState = Array<string>

const initialState: InitialState = ['sample']

const globalScreenSlice = createSlice({
  name: 'globalScreen',
  initialState,
  reducers: {
    push(state, action: PayloadAction<string>) {
      state.length = 0
      state.push(action.payload)
    }
  }
})

export const { push } = globalScreenSlice.actions
export default globalScreenSlice.reducer
