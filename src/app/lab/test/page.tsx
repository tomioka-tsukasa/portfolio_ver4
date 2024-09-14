'use client'

import { useEffect } from "react";
import styles from "./_index.module.scss";
import canvasStyles from "@/app/lab/_canvasLayout.module.scss"
import Canvas from "./webgl/index"
import { usePathname } from "next/navigation";

export default function LabTest() {
  const pathname = usePathname()
  useEffect(() => {
    Canvas()
  }, [pathname])
  return <>
    <div className={styles.root}>
      <h1>
        研究項目の読み込みテスト
      </h1>
      <p>
        Hello World.<br />
        `@/app/lab/`配下で開発したページを読み込んで閲覧可能！
      </p>
      <div id="canvas" className={canvasStyles.canvas}></div>
      <p>
        Dummy.
      </p>
      <p>
        Dummy.
      </p>
      <p>
        Dummy.
      </p>
      <p>
        Dummy.
      </p>
      <p>
        Dummy.
      </p>
      <p>
        Dummy.
      </p>
      <p>
        Dummy.
      </p>
      <p>
        Dummy.
      </p>
      <p>
        Dummy.
      </p>
      <p>
        Dummy.
      </p>
    </div>
  </>
}
