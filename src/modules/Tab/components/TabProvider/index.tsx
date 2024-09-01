'use client'

import Provider from "../../store"
import { InitialState } from "../../types"

type Props = {
  children: React.ReactNode,
  initialState: InitialState,
}

export function TabProvider({
  children,
  initialState
}: Props ) {
  return <>
    <Provider initialState={initialState}>
      {children}
    </Provider>
  </>
}
