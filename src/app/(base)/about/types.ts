import { Dispatch, ReducerState } from "react"

export type ProviderProps = {
  children: React.ReactNode
}

export type InitialState = {
  qa: {
    active: string
  }
}

export type ActionPayload = {
  qa: {
    active: string
  }
}

export type StoreMember = {
  state: Record<string, ReducerState<any>>,
  dispatch: Record<string, Dispatch<any>>
}
