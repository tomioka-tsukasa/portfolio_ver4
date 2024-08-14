'use client'

import { useContext } from "react";
import { ThemeContext } from "../theme-provider";

const ChangeTheme = (): React.ReactNode => {
  const [state, dispatch] = useContext(ThemeContext)
  const changeTheme= (event: any) => {
    const newTheme = event.target.dataset.theme
    dispatch(newTheme)
  }
  console.log('client');
  return <>
    <button onClick={changeTheme} data-theme="dark">dark</button>
    <button onClick={changeTheme} data-theme="light">light</button>
    {state}
  </>
}

export default ChangeTheme
