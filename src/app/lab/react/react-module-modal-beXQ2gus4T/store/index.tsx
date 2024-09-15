import { createContext, Dispatch, useContext, useReducer } from "react";
import { ActionPayload, InitialState, ProviderProps, Reducer } from "./types";

const initialState: InitialState = false;

const reducer: Reducer = (state, action) => {
  return action
}

const StateContext = createContext<InitialState | undefined>(undefined)
const UpdateContext = createContext<Dispatch<ActionPayload> | undefined>(undefined)

export default function Provider({
  children
}: ProviderProps ) {
  const [state, setState] = useReducer(reducer, initialState)
  return <>
    <StateContext.Provider value={state}>
      <UpdateContext.Provider value={setState}>
        {children}
      </UpdateContext.Provider>
    </StateContext.Provider>
  </>
}

export const useStateContext = () => {
  const context = useContext(StateContext)
  if (context === undefined) throw new Error('useStateContext must be used within a TabProvider.')
  return context
}

export const useUpdateContext = () => {
  const context = useContext(UpdateContext)
  if (context === undefined) throw new Error('useUpdateContext must be used within a TabProvider.')
  return context
}
