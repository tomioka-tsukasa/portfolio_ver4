'use client'

import { useEffect } from "react"
import styles from "./_index.module.scss"
import { Typing } from "@/lib/utils/typing"
import types from "../../../store/types.json"
import { basic } from "@/lib/utils/typing/pattern/basic"
import { lookahead } from "@/lib/utils/typing/pattern/lookahead"
import { withParse } from "@/lib/utils/typing/pattern/withParse"

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
      withParse(
        types.sample,
        document.querySelector<HTMLElement>('[data-typing-id="test"]'),
        test.store,
        {
          speed: 3,
          convertSpeed: 7
        }
      ).typeFunc,
      () => endFunc()
    )
  })
  return <>
    <div className={styles.root}>
      <div className={styles.status} data-typing-id="end"></div>
      <div className={styles.samples}>
        <span className={styles.type} data-typing-id="test"></span>
      </div>
    </div>
  </>
}
