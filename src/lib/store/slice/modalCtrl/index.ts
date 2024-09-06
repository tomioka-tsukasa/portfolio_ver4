import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CloseAction, InitialState, PushAction } from "./types";

const initialState: InitialState = {
  open: false,
  active: {
    id: '',
    type: '',
    pass: ''
  }
}

const counterSlice = createSlice({
  name: 'modalCtrl',
  initialState,
  reducers: {
    push(state, action: PayloadAction<PushAction>) {
      state.open = true
      state.active = action.payload
    },
    close(state, action: PayloadAction<CloseAction>) {
      state.open = false
    }
  }
})

export const { push, close } = counterSlice.actions
export default counterSlice.reducer
