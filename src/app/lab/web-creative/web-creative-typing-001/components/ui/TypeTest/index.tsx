'use client'

import { useEffect } from "react"
import styles from "./_index.module.scss"
import { Typing } from "@/lib/utils/typing"
import types from "../../../store/types.json"
import { typingBasic } from "@/lib/utils/typing/modules/typingBasic"

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
      typingBasic(
        types.hello,
        document.querySelector<HTMLElement>('[data-typing-id="sample01"]'),
      ).typeFunc,
    )
    setTimeout(() => {
      sample01.stop()
    }, 500);
    setTimeout(() => {
      sample02.exec(
        'sample02',
        typingBasic(
          types.hello,
          document.querySelector<HTMLElement>('[data-typing-id="sample02"]'),
        ).typeFunc,
        () => endFunc()
      ) 
    }, 1000);
  })
  return <>
    <div className={styles.root}>
      <div className={styles.status} data-typing-id="end"></div>
      <div className={styles.samples}>
        <span className={styles.type} data-typing="target" data-typing-id="sample01"></span>
        <span className={styles.type} data-typing="target" data-typing-id="sample02"></span>
      </div>
    </div>
  </>
}
