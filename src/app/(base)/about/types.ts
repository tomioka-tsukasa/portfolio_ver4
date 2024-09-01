import { Dispatch, ReducerState } from "react"

export type ProviderProps = {
  children: React.ReactNode,
  initialState: InitialState
}

export type InitialState = {
  qa: {
    active: string
  }
}

export type Initializer = (initialState: InitialState) => InitialState

export type ActionPayload = {
  qa: {
    active: string
  }
}

export type StoreMember = {
  state: InitialState,
  dispatch: Dispatch<ActionPayload>,
}
