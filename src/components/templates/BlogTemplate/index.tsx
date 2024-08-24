import styles from "./_index.module.scss"
import React from "react";

type Props = {
  children: React.ReactNode,
  nav: React.ReactNode,
  wrapper?: boolean,
}

export default function BlogTemplate({
  children,
  nav,
  wrapper = false
}: Props ) {
  return <>
    <div className={styles.root}>
      <main className={`${styles.main}`}>
        {wrapper
         ? <div className={styles.wrapper}>{children}</div>
         : children
        }
      </main>
      <nav className={`${styles.nav}`}>
        {nav}
      </nav>
    </div>
  </>
}
