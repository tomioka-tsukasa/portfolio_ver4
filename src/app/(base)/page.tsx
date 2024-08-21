import { zenOldMincho_w700 } from "@/lib/fonts"
import styles from "./_index.module.scss"

export default function Home() {
  return <>
    <h1 className={`${styles.head} ${zenOldMincho_w700.className}`}>
      Hello Portfolio ver4
      <span className={`${styles.col} ${zenOldMincho_w700.className}`}>
        開発途中...
      </span>
    </h1>
  </>
}
