'use client'

import React, { createContext, Dispatch, useContext, useReducer } from "react";
import { ActionPayload, InitialState, Initializer, ProviderProps } from "./types";

const reducer = (state: InitialState, action: ActionPayload) => {
  return {
    ...state,
    active: action.active,
  }
}

const initializer: Initializer = (initialState) => ({
  ...initialState
})

const StateContext = createContext<InitialState | undefined>(undefined)

const ChangeContext = createContext<Dispatch<ActionPayload> | undefined>(undefined)

export default function Provider({
  children,
  initialState
}: ProviderProps ) {
  const [state, setActive] = useReducer(reducer, initialState, initializer)
  return <>
    <StateContext.Provider value={state}>
      <ChangeContext.Provider value={setActive}>
        {children}
      </ChangeContext.Provider>
    </StateContext.Provider>
  </>
}

export const useStateContext = () => {
  const context = useContext(StateContext)
  if (context === undefined) throw new Error('useStateContext must be used within a TabProvider.')
  return context
}

export const useChangeContext = () => {
  const context = useContext(ChangeContext)
  if (context === undefined) throw new Error('useChangeContext must be used within a TabProvider.')
  return context
}
