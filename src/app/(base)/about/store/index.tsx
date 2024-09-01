'use client'

import { createContext, Dispatch, useContext, useReducer } from "react";
import { ActionPayload, Initializer, InitialState, ProviderProps, StoreMember } from "../types";

const initializer: Initializer = (initialState) => ({
  ...initialState
})

const reducer = {
  qa(state: InitialState, action: ActionPayload) {
    return {
      ...state,
      qa: {
        active: action.qa.active
      }
    }
  }
}

const StateContext = createContext<InitialState | undefined>(undefined)
const DispatchContext = createContext<Dispatch<ActionPayload> | undefined>(undefined)

export default function AboutStore({
  children,
  initialState,
}: ProviderProps ) {
  const [state, dispatch] = useReducer(reducer.qa, initialState, initializer)
  const store: StoreMember = {
    state,
    dispatch,
  }
  return <>
    <StateContext.Provider value={store.state}>
      <DispatchContext.Provider value={store.dispatch}>
        {children}
      </DispatchContext.Provider>
    </StateContext.Provider>
  </>
}

export const useStateContext = () => {
  const context = useContext(StateContext)
  if (context === undefined) throw new Error('useStateContext must be used within a TabProvider.')
  return context
}

export const useDispatchContext = () => {
  const context = useContext(DispatchContext)
  if (context === undefined) throw new Error('useDispatchContext must be used within a TabProvider.')
  return context
}
