import React from "react"

export type ListType = Array<ItemType>

export type ItemType = {
  id: string,
  default: boolean,
  name: string,
  component: React.ReactNode
}

export type GetInitial = (defaultActive?: string) => InitialState

export type ProviderProps = {
  children: React.ReactNode,
  initialState: InitialState
}

export type InitialState = {
  active: string
}

export type Initializer = (initialState: InitialState) => InitialState

export type ActionPayload = {
  active: string
}

export type Reducer = (state: InitialState, action: ActionPayload) => InitialState
