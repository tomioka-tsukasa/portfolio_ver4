import Link from "next/link"
import styles from "./_index.module.scss"

export default function GlobalMenuIcon() {
  return <>
    <div className={styles.root}>
      <Link href='/' className={styles.link}>
        <span className={styles.item}></span>
        <span className={styles.item}></span>
      </Link>
    </div>
  </>
}
