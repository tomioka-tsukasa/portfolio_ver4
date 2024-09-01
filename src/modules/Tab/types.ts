import React from "react"

export type TabList = Array<TabMember>

export type TabMember<O = Record<string, any>> = {
  id: string,
  content?: React.ReactNode,
  name?: string,
  trigger?: React.ReactNode,
  opt?: O
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
