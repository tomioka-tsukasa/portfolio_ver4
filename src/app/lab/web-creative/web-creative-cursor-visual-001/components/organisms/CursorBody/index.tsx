'use client'

import { Cursor } from "@/modules/Cursor/modules/basic"
import styles from "./_index.module.scss"
import { useEffect } from "react"
import Items from "../../molecules/Items"

export default function CursorBody() {
  useEffect(() => {
    new Cursor([
      {
        name: '[data-mod-cursor="body-inner"]',
        duration: 0.08,
        gap: 0.5
      },
    ], 'a, [data-mod-cursor-item="hover"]')
  }, [])
  return <>
    <div className={`${styles.inner}`} data-mod-cursor="body-inner">
      <div className={`${styles.innerDesign}`}>
        <div className={`${styles.items}`}>
          <Items />
        </div>
      </div>
    </div>
  </>
}
