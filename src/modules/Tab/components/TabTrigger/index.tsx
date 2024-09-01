'use client'

import styles from "./_index.module.scss"
import { useChangeContext, useStateContext } from "../../store"
import { TabMember } from "../../types"

type Props = {
  children: React.ReactNode,
  member: TabMember,
}

export function TabTrigger({
  children,
  member,
}: Props ) {
  const state = useStateContext()
  const setActive = useChangeContext()
  const clickHandler = () => {
    setActive({
      active: member.id
    })
  }
  return <>
    <button className={`${styles.root} ${state.active === member.id ? styles.isActive : ''}`} onClick={clickHandler}>
      {children}
    </button>
  </>
}
