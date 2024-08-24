import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: Types.InitialState = {
  value: 0
}

const counterSlice = createSlice({
  name: 'sample',
  initialState,
  reducers: {
    change(state, action: PayloadAction<Types.ChangeAction>) {
      switch (action.payload.type) {
        case '+':
          state.value += action.payload.value
          break
        case '-':
          state.value -= action.payload.value
          break
      }
    }
  }
})

export const { change } = counterSlice.actions
export default counterSlice.reducer
