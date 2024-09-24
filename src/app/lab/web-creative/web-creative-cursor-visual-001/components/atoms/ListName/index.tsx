'use client'

import styles from "./_index.module.scss"

type Props = {
  text: string,
  active?: boolean,
}

export default function ListName({
  text = '',
  active = true,
}: Props ) {
  return <>
    <span className={`${styles.root} ${active ? styles.isActive : ''}`}>
      {text}
    </span>
  </>
}
