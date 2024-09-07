'use client'

import React from "react"
import styles from "./_index.module.scss"
import { useRouter } from "next/navigation"
import { zenOldMincho_w500, zenOldMincho_w700 } from "@/lib/fonts"
import Navigation from "@/modules/Navigation"

type Props = {
  children: React.ReactNode | string,
  href?: string,
  tag?: 'a' | 'button',
  type?: 'routerBack' | string,
}

export default function Button({
  children,
  href = '/',
  tag = 'a',
  type = '',
}: Props ) {
  const router = useRouter()
  const backClickHander = () => {
    router.back()
  }
  switch (type) {
    case 'routerBack':
      return <>
        {React.createElement(
          'button',
          {
            className: `${styles.root} ${zenOldMincho_w500.className}`,
            onClick: backClickHander
          },
          children
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
        children
      )}
    </>
    else return <>
      <Navigation href={href} className={`${styles.root} ${zenOldMincho_w500.className}`}>
        {children}
      </Navigation>
    </>
  }
}
