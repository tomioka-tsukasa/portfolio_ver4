'use client'

import { createContext, MouseEventHandler, Reducer, ReducerState, ReducerWithoutAction, useReducer } from "react"

type Theme = 'dark' | 'light';

const changeTheme = (prev: Theme, theme: Theme) => {
  return theme
}

export const ThemeContext = createContext<[Theme, any]>(['dark', changeTheme])

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [state, dispatch] = useReducer(changeTheme, 'dark')

  return <>
    <ThemeContext.Provider value={[state, dispatch]}>
      <div className={`theme-${state}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  </>
}
