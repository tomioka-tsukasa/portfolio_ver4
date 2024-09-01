'use client'

import styles from "./_index.module.scss"
import { useStateContext } from "../../store"
import { TabMember } from "../../types"

type Props = {
  children: React.ReactNode,
  member: TabMember,
}

export default function TabContent({
  children,
  member
}: Props ) {
  const state = useStateContext()
  return <>
    <div className={`${styles.root} ${state.active === member.id ? styles.isActive : ''}`}>
      {children}
    </div>
  </>
}
