import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";

type ClientObject = Record<string, {}>
const initialState: ClientObject = {}

const clientObjectSlice = createSlice({
  name: 'clientObject',
  initialState,
  reducers: {
    push(state, action: PayloadAction<[Record<string, any>]>) {
      action.payload.forEach( item => {
        state[item.key] = item.value
      })
      // console.log(
      //   current(state)
      // )
    }
  }
})

export const { push } = clientObjectSlice.actions
export default clientObjectSlice.reducer
