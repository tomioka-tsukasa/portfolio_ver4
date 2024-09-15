'use client'

import canvasStyles from "@/app/lab/_canvasLayout.module.scss"
import { usePathname } from "next/navigation"
import { useEffect } from "react"

export default function LabWebGl3dmodelTry001() {
  const pathname = usePathname()
  useEffect(() => {
    import('./webgl').then( module => module.default())
  }, [pathname])
  return <>
    <div id="canvas" className={canvasStyles.canvas}></div>
  </>
}
