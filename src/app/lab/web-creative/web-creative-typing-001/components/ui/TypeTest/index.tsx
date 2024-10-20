'use client'

import { useEffect } from "react"
import styles from "./_index.module.scss"
import { Typing } from "@/lib/utils/typing"
import types from "../../../store/types.json"
import { typingBasic } from "@/lib/utils/typing/modules/typingBasic"
import { typingLookahead } from "@/lib/utils/typing/modules/typingLookahead"

export default function TypeTest() {
  useEffect(() => {
    const test = new Typing()
    const endFunc = () => {
      const endArea = document.querySelector<HTMLElement>('[data-typing-id="end"]')
      if (!endArea) return
      endArea.innerHTML = 'END!'
    }
    test.exec(
      'test',
      typingLookahead(
        types.sample,
        document.querySelector<HTMLElement>('[data-typing-id="test"]'),
      ).typeFunc,
      () => endFunc()
    )
  })
  return <>
    <div className={styles.root}>
      <div className={styles.status} data-typing-id="end"></div>
      <div className={styles.samples}>
        <span className={styles.type} data-typing="target" data-typing-id="test"></span>
      </div>
    </div>
  </>
}
