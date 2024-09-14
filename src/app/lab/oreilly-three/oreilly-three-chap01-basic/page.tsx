'use client'

import styles from "./_index.module.scss"
import { usePathname } from "next/navigation"
import { useEffect } from "react"

export default function LabOreillyThreeChap01Basic() {
  const pathname = usePathname()
  useEffect(() => {
    import('./webgl').then( module => {
      module.default()
    })
  }, [pathname])
  return <>
    <canvas id="canvas" className={styles.canvas}></canvas>
    <div id="stats" className={styles.stats}></div>
    <button id="effect" className={styles.effect}>
      Effect
    </button>
  </>
}
