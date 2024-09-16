'use client'

import { useRouter } from "next/navigation"
import styles from "./_index.module.scss"
import Arrow from "@/components/atoms/Arrow"

export default function BackButton() {
  const router = useRouter()
  const clickHander = () => {
    document.body.classList.remove('UF_homeAnimationInit')
    router.back()
  }
  return <>
    <nav className={styles.root}>
      <button onClick={clickHander} className={styles.button}>
        <span className={styles.arrow}>
          <Arrow />
        </span>
        <span className={styles.text}>
          戻る
        </span>
      </button>
    </nav>
  </>
}
