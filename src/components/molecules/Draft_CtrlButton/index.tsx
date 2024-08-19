'use client'

import { useRouter } from "next/navigation"
import styles from "./_index.module.scss"
import Arrow from "@/components/atoms/Arrow"
import { useEffect } from "react"

export default function Draft_CtrlButton() {
  const router = useRouter()
  return <>
    <div className={styles.root}>
      <div className={styles.buttons}>
        <button onClick={() => router.back()} className={styles.button}>
          <span className={styles.arrow}>
            <Arrow />
          </span>
          <span className={styles.text}>
            戻る
          </span>
        </button>
      </div>
    </div>
  </>
}
