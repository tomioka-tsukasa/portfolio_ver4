import styles from "./_index.module.scss"
import React from "react";

type Props = {
  children: React.ReactNode,
  nav: React.ReactNode,
}

export default function BlogTemplate({
  children,
  nav,
}: Props ) {
  return <>
    <div className={styles.root}>
      <main className={`${styles.main}`}>
        {children}
      </main>
      <nav className={`${styles.nav}`}>
        {nav}
      </nav>
    </div>
  </>
}
