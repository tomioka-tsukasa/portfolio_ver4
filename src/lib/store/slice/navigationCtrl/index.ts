import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { InitialState, PushAction } from "./types";

const initialState: InitialState = {
  nextPath: ''
}

const navigationCtrl= createSlice({
  name: 'navigationCtrl',
  initialState,
  reducers: {
    push(state, action: PayloadAction<PushAction>) {
      state.nextPath = action.payload
    }
  }
})

export const { push } = navigationCtrl.actions
export default navigationCtrl.reducer
