'use client'

import { useEffect } from "react";
import styles from "./_index.module.scss";
import Canvas from "./webgl/index"

export default function LabTest() {
  useEffect(() => {
    Canvas()
  }, [])
  return <>
    <div className={styles.root}>
      <h1>
        研究項目の読み込みテスト
      </h1>
      <p>
        Hello World.<br />
        `@/app/lab/`配下で開発したページを読み込んで閲覧可能！
      </p>
      <div id="canvas" className={styles.canvas}></div>
    </div>
  </>
}
