'use client'

import { useEffect, useRef, useState } from "react"
import styles from "./_index.module.scss"
import gsap from "gsap"
import { GridVisual } from "@/modules/GridVisual"

export default function UiGrid() {
  const rootRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const gridVisual = new GridVisual(rootRef.current)
    gridVisual.set()
    if (!rootRef.current) return
    const items = rootRef.current.querySelectorAll('[data-grid-visual-id="container"] [data-grid-visual-id="item"]');
    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 1,
      yoyo: true,
    })
    if (items) tl.to(items, {
      duration: 0.3,
      borderColor: '#cccccc',
      ease: 'power1.inOut',
      stagger: {
        from: 'random',
        amount: 1,
      },
    }).to(items, {
      duration: 0.3,
      backgroundColor: '#ffffff',
      ease: 'power1.inOut',
      stagger: {
        from: 'start',
        amount: 1,
      }, 
    }).to(items, {
      duration: 1,
      scale: 0.25,
      backgroundColor: 'rgba(0, 0, 0, .3)',
      ease: 'power1.inOut',
      stagger: {
        from: 'start',
        amount: 1,
      }, 
    })
  }, [])
  return <>
    <div className={styles.root} ref={rootRef}>
      <div className={styles.container} data-grid-visual-id="container"></div>
    </div>
  </>
}
