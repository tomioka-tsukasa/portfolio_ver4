'use client'

import { createContext, useReducer } from "react"
import { Theme } from "./type"

const initialTheme: Theme['name'] = 'dark';
const changeTheme: Theme['changeTheme'] = (prev, theme) => {
  return theme
}

export const ThemeContext = createContext([initialTheme, changeTheme])

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [state, dispatch] = useReducer(changeTheme, initialTheme)

  return <>
    <ThemeContext.Provider value={[state, dispatch]}>
      <div className={`theme-${state}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  </>
}
