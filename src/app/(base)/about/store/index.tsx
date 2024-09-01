'use client'

import { createContext, useContext, useReducer } from "react";
import { ActionPayload, InitialState, ProviderProps, StoreMember } from "../types";

const initialState: InitialState = {
  qa: {
    active: ''
  }
}

const reducer = {
  qa(state: InitialState['qa'], action: ActionPayload['qa']) {
    return {
      active: action.active
    }
  }
}

const StateContext = createContext<any>(undefined)
const ChangeContext = createContext<any | undefined>(undefined)

export default function AboutStore({
  children
}: ProviderProps ) {
  const [qaState, setQaState] = useReducer(reducer.qa, initialState.qa)
  const store: StoreMember = {
    state: {
      qa: qaState
    },
    dispatch: {
      qa: setQaState
    }
  }
  return <>
    <StateContext.Provider value={store.state}>
      <ChangeContext.Provider value={store.dispatch}>
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
  const context = useContext(StateContext)
  if (context === undefined) throw new Error('useChangeContext must be used within a TabProvider.')
  return context
}
