'use client'

import React, { Fragment } from "react"
import Modal from "./screens/Modal"
import Menu from "./screens/Menu"
import { useAppDispatch, useAppSelector } from "@/lib/store/hook"
import { push } from "@/lib/store/slice/globalScreen"

export default function GlobalScreen() {
  const screenComps: Record<string, React.ReactNode> = {
    modal: <Modal />,
    menu: <Menu />
  }

  const dispatch = useAppDispatch()
  const activeScreens = useAppSelector( state => state.globalScreen)

  const clickHandler = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const displayTarget = event.currentTarget.dataset.display ?? ''
    dispatch(push(displayTarget))
  }

  return <div className="GlobalScreen" data-state={activeScreens.join(' ')}>
    <button onClick={clickHandler} data-display="menu">Display Menu</button>
    <button onClick={clickHandler} data-display="modal">Display Modal</button>
    {activeScreens.map( compKey => (
      <Fragment key={compKey}>
        {screenComps[compKey]}
      </Fragment>
    ))}
  </div>
}
