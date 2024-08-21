import { zenOldMincho_w400 } from "@/lib/fonts"
import styles from "./_index.module.scss"

export default function Footer() {
  return <>
    <div className={styles.root}>
      <small className={`${styles.copyright} ${zenOldMincho_w400.className}`}>
        PORTFOLIO SITE. | COPYRIGHT © TSUKASA TOMIOKA ALL RIGHTS RESERVED.
      </small>
    </div>
  </>
}