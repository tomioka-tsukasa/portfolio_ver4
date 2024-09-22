'use client'

import styles from "./_index.module.scss"

type Props = {
  body: React.ReactNode,
}

export default function Cusor({
  body,
}: Props ) {
  return <>
    <div className={styles.root}>
      <div className={styles.inner}>
        {body}
      </div>
    </div>
  </>
}
