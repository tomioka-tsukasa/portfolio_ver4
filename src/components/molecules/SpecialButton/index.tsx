import Arrow from "@/components/atoms/Arrow"
import styles from "./_index.module.scss"
import React from "react"
import { zenOldMincho_w700 } from "@/lib/fonts"
import Link from "next/link"

type Props = {
  children: string | React.ReactNode,
  href: string,
  arrowPos?: 'right' | 'left'
}

export default async function SpecialButton({
  children,
  href = '/',
  arrowPos
}: Props) {
  return <>
    <Link href={href} className={`${styles.root} ${arrowPos}`}>
      <div className={`${styles.text} ${zenOldMincho_w700.className}`}>
        {children}
      </div>
      <Arrow className={{
        arrow: styles.arrow,
        svg: styles.svg,
        path: styles.path,
      }} />
    </Link>
  </>
}
