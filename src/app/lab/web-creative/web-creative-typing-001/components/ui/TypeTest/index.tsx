'use client'

import { useEffect } from "react"
import styles from "./_index.module.scss"
import { Typing } from "@/lib/utils/typing"
import types from "../../../store/types.json"
import { basic } from "@/lib/utils/typing/pattern/basic"
import { lookahead } from "@/lib/utils/typing/pattern/lookahead"
import { withParse } from "@/lib/utils/typing/pattern/withParse"
import { zenKakuGothicNew_w500 } from "@/lib/fonts"

const endFunc = () => {
  if (!document) return
  const target = document.querySelector<HTMLElement>('[data-typing-id="end"]')
  if (!target) return
  target.innerHTML = 'END!'
}

export default function TypeTest() {
  useEffect(() => {
    const sample01 = new Typing()
    sample01.exec(
      'sample01',
      withParse(
        types.sample01,
        document.querySelector<HTMLElement>('[data-typing-id="sample01"]'),
        sample01.store,
        {
          speed: 2,
          convertSpeed: 3
        }
      ).typeFunc,
    )
    const sample02 = new Typing()
    sample02.exec(
      'sample02',
      withParse(
        types.sample02,
        document.querySelector<HTMLElement>('[data-typing-id="sample02"]'),
        sample02.store,
        {
          speed: 2,
          convertSpeed: 3
        }
      ).typeFunc,
      () => endFunc()
    )
  })
  return <>
    <div className={styles.root}>
      <div className={styles.status} data-typing-id="end"></div>
      <div className={styles.typeArea}>
        <span className={`${styles.type} ${zenKakuGothicNew_w500.className}`} data-typing-id="sample01"></span><br />
        <br />
        <span className={`${styles.type} ${zenKakuGothicNew_w500.className}`} data-typing-id="sample02"></span>
      </div>
    </div>
  </>
}
