'use client'

import { Cursor } from "@/modules/Cursor/modules/basic"
import styles from "./_index.module.scss"
import { useEffect } from "react"

export default function CursorBody() {
  useEffect(() => {
    new Cursor([
      {
        name: '[data-mod-cursor="body-outter"]',
        duration: 0.08,
      },
      {
        name: '[data-mod-cursor="body-inner"]',
        duration: 0.2,
      },
    ], 'a, [data-mod-cursor-item="hover"]')
  }, [])
  return <>
    <div className={`${styles.outter}`} data-mod-cursor="body-outter">
      <div className={`${styles.outterDesign}`}></div>
    </div>
    <div className={`${styles.inner}`} data-mod-cursor="body-inner">
      <div className={`${styles.innerDesign}`}></div>
    </div>
  </>
}
