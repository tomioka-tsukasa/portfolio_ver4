'use client'

import defaultStyles from "./_index.module.scss"
import { useChangeContext, useStateContext } from "../../store"
import { TabMember } from "../../types"

type Props = {
  children: React.ReactNode,
  member: TabMember,
  styles?: { readonly [key: string]: string }
}

export default function TabTrigger({
  children,
  member,
  styles
}: Props ) {
  const state = useStateContext()
  const setActive = useChangeContext()
  const clickHandler = () => {
    setActive({
      active: member.id
    })
  }
  return <>
    <button className={`
      ${styles ? styles.default : defaultStyles.default} 
      ${styles ? (state.active === member.id ? styles.isActive : '') : (state.active === member.id ? defaultStyles.isActive : '') }`
    } onClick={clickHandler}>
      {children}
    </button>
  </>
}

export const useTabActive = (): string => {
  return useStateContext().active
}
