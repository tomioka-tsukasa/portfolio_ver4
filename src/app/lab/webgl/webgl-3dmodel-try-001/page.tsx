'use client'

import styles from "./_index.module.scss"
import { usePathname } from "next/navigation"
import { useEffect } from "react"
import Canvas from "./webgl"

export default function LabWebGl3dmodelTry001() {
  const pathname = usePathname()
  useEffect(() => {
    Canvas()
  }, [pathname])
  return <>
    <div id="canvas" className={styles.canvas}></div>
  </>
}
