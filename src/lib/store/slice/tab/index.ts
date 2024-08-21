import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type StateObject = {
  active: string,
  contentId: string
}

type InitialState = Record<string, StateObject>

type RegisterAction = {
  id: string, 
  value: StateObject
}

type ChangeAction = {
  id: string, 
  active: string, 
}

const initialState: InitialState = {
  sample: {
    active: '01',
    contentId: ''
  }
}

const tabSlice = createSlice({
  name: 'tab',
  initialState,
  reducers: {
    register(state, action: PayloadAction<RegisterAction>) {
      state[action.payload.id] = action.payload.value
    },
    change(state, action: PayloadAction<ChangeAction>) {
      state[action.payload.id].active = action.payload.active
    }
  }
})

export const { register, change } = tabSlice.actions
export default tabSlice.reducer
