import styles from "./_index.module.scss"
import Navigation from "@/modules/Navigation"

export default function GlobalMenuIcon() {
  return <>
    <div className={styles.root}>
      <Navigation href='/' className={styles.link}>
        <span className={styles.item}></span>
        <span className={styles.item}></span>
      </Navigation>
    </div>
  </>
}
