'use client'

import { useEffect } from "react"
import styles from "./_index.module.scss"
import { Typing } from "@/lib/utils/typing"
import types from "../../../store/types.json"
import { typingBasic } from "@/lib/utils/typing/modules/typingBasic"
import { typingLookahead } from "@/lib/utils/typing/modules/typingLookahead"

export default function TypeTest() {
  useEffect(() => {
    const sample01 = new Typing()
    const sample02 = new Typing()
    const endFunc = () => {
      const endArea = document.querySelector<HTMLElement>('[data-typing-id="end"]')
      if (!endArea) return
      endArea.innerHTML = 'END!'
    }
    sample01.exec(
      'sample01',
      typingLookahead(
        types.hello,
        document.querySelector<HTMLElement>('[data-typing-id="sample01"]'),
      ).typeFunc,
      () => endFunc()
    )
  })
  return <>
    <div className={styles.root}>
      <div className={styles.status} data-typing-id="end"></div>
      <div className={styles.samples}>
        <span className={styles.type} data-typing="target" data-typing-id="sample01"></span>
      </div>
    </div>
  </>
}
