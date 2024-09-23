export type ProviderProps= {
  children: React.ReactNode
}

export type InitialState = string | false

export type Reducer = (
  state: InitialState,
  action: ActionPayload
) => InitialState

export type ActionPayload = InitialState
