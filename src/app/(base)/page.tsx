import { zenOldMincho_w700 } from "@/lib/fonts"
import styles from "./_index.module.scss"
import Typing from "@/components/atoms/Typing"

export default function Home() {
  return <>
    <h1 className={`${styles.head} ${zenOldMincho_w700.className}`}>
      <Typing text={'Hello Tsukasa Tomioka Portfolio.'} initDisplay={false} />
      <span className={`${styles.col} ${zenOldMincho_w700.className}`}>
        開発途中...
      </span>
    </h1>
  </>
}
