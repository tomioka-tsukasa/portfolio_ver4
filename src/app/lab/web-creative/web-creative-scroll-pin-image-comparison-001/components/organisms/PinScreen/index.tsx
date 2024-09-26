'use client'

import styles from "./_index.module.scss"
import model002 from "¥/public/lab/web-creative/web-creative-scroll-pin-image-comparison-001/model-002.jpg"
import ClipItem from "../../atoms/ClipItem"
import Design from "../../molecules/Design"
import { useEffect } from "react"
import { gsapInit } from "../../../gsap"

export default function PinScreen() {
  useEffect(() => {
    gsapInit()
  }, [])
  return <>
    <div className={styles.root} data-gsap-item="pin">
      <div className={`${styles.item} ${styles.before}`} data-gsap-item="before">
        <ClipItem image={model002} />
      </div>
      <div className={`${styles.item} ${styles.after}`} data-gsap-item="after">
        <ClipItem image={model002} />
      </div>
      <Design />
    </div>
  </>
}
