'use client'

import React, { useState } from "react"
import styles from "./_index.module.scss"
import { useRouter } from "next/navigation"
import { zenOldMincho_w500, zenOldMincho_w700 } from "@/lib/fonts"
import Navigation from "@/modules/Navigation"
import Typing from "../Typing"

type Props = {
  children: string,
  href?: string,
  tag?: 'a' | 'button',
  type?: 'routerBack' | string,
  typing?: boolean
}

export default function Button({
  children,
  href = '/',
  tag = 'a',
  type = '',
  typing = false,
}: Props ) {
  const router = useRouter()
  const backClickHander = () => {
    router.back()
  }
  const [state, setState] = useState(false)
  const mouseEnterHander = () => {
    setState(true)
  }
  const childNode = <div className={styles.text} onMouseEnter={mouseEnterHander}>
    {typing
      ? <Typing 
        text={children} 
        speed={4} 
        trigger={state} 
        endCallback={() => {
          setState(false)
        }}
      />
      : <>{children}</>
    }
  </div>
  switch (type) {
    case 'routerBack':
      return <>
        {React.createElement(
          'button',
          {
            className: `${styles.root} ${zenOldMincho_w500.className}`,
            onClick: backClickHander
          },
          childNode
        )}
      </>
    default:
      if (href.includes('http')) return <>
        {React.createElement(
          tag,
          {
            className: `${styles.root} ${zenOldMincho_w500.className}`,
            href: href ? href : undefined,
            target: href.includes('http') ? '_blank' : undefined
          },
          childNode
        )}
      </>
      else return <>
        <Navigation href={href} className={`${styles.root} ${zenOldMincho_w500.className}`}>
          {childNode}
        </Navigation>
      </>
  }
}
