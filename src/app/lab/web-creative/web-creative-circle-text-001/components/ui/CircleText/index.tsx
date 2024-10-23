'use client'

import { useEffect, useRef } from "react"
import styles from "./_index.module.scss"
import gsap from "gsap";
import { circleText } from "@/modules/CircleText";
import { Option } from "@/modules/CircleText/types";

type Props = {
  text: string,
  option: Option,
}

export default function CircleText({
  text,
  option,
}: Props ) {
  const containerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!containerRef.current) return
    circleText(
      containerRef.current,
      text,
      option
    )
    const items = containerRef.current.querySelectorAll('span')
    if (items) gsap.fromTo(items, {
      opacity: 0,
      duration: 0.5,
    }, {
      opacity: 1,
      duration: 0.1,
      stagger: {
        amount: 1.5,
        from: 'end'
      }
    })
    const tl = gsap.timeline()
    if (containerRef.current) tl.to(containerRef.current, {
      rotate: '+=360deg',
      duration: 5,
      ease: 'expo.out',
      repeat: -1,
      immediateRender: false
    }).to(containerRef.current, {
      rotate: '+=360deg',
      duration: 5,
      ease: 'none',
      repeat: -1,
      immediateRender: false
    }, '-=3.64')
  }, [text, option, containerRef])
  return <>
    <div className={styles.root}>
      <div className={styles.container} ref={containerRef}></div>
    </div>
  </>
}
