'use client'

import canvasStyles from "@/app/lab/_canvasLayout.module.scss"
import { usePathname } from "next/navigation"
import { useEffect } from "react"

export default function LabOreillyThreeChap01Basic() {
  const pathname = usePathname()
  useEffect(() => {
    import('./webgl').then( module => {
      module.default()
    })
  }, [pathname])
  return <>
    <canvas id="canvas" className={canvasStyles.canvas}></canvas>
    <div id="stats" className={canvasStyles.stats}></div>
    <div id="changer" className={canvasStyles.changer}>
      <p className="prev" style={{
        display: 'inline-block',
        marginRight: '20px',
        cursor: 'pointer',
      }}>
        PREV
      </p>
      <p className="next" style={{
        display: 'inline-block',
        marginLeft: '20px',
        cursor: 'pointer',
      }}>
        NEXT
      </p>
    </div>
    <button id="effect" className={canvasStyles.effect}>
      Effect
    </button>
  </>
}
