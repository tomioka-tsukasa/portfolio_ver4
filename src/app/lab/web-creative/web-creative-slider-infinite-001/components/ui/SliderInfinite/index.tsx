'use client'

import { useEffect, useRef } from "react"
import styles from "./_index.module.scss"
import { SliderInfinite } from "@/modules/SliderInfinite"
import gsap from "gsap"

type Props = {
  content?: React.ReactNode
}

export default function SliderInfiniteUi({
  content = <div>HELLO WORLD.</div>
}: Props ) {
  const rootRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!rootRef.current) return
    const sliderInfinite = new SliderInfinite(
      rootRef.current.querySelector('[data-slider-ifnt-id="wrapper"]'),
      {
        gap: 30
      }
    )
    sliderInfinite.ctrl = {
      speed: 1
    }
    gsap.to(sliderInfinite.ctrl, {
      speed: 40,
      duration: 1.6,
      ease: 'power4.inOut',
      onComplete() {
        setTimeout(() => {
          gsap.to(sliderInfinite.ctrl, {
            speed: 1,
            duration: 3,
            ease: 'power4.out',
          })
        }, 100);
      }
    })
    sliderInfinite.exec(
      sliderInfinite.doms,
      sliderInfinite.ctrl
    )
    setTimeout(() => {
      if (!rootRef.current) return
      rootRef.current.dataset.gsapId = 'init'
    }, 10);
  }, [content, rootRef])
  return <>
    <div className={styles.root} ref={rootRef}>
      <div className={styles.wrapper} data-slider-ifnt-id="wrapper">
        <div className={styles.container} data-slider-ifnt-id="container">
          <div className={styles.content} data-slider-ifnt-id="content">
            <div className={styles.item} data-slider-ifnt-id="item">
              {content}
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}
