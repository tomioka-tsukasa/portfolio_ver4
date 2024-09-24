'use client'

import styles from "./_index.module.scss"

type Props = {
  active?: boolean
}

export default function ListStyle({
  active = true
}: Props ) {
  return <>
    <span className={`${styles.root} ${active ? styles.isActive : ''}`}></span>
  </>
}
