'use client'

import { zenOldMincho_w400 } from "@/lib/fonts";
import styles from "./_index.module.scss";
import Typing from "@/components/atoms/Typing";
import { useEffect, useState } from "react";

export default function HomeScreen() {
  const [status, setStatus] = useState(false)
  useEffect(() => {
    document.body.classList.add('homeAnimationInit')
    setTimeout(() => {
      setStatus(true)
    }, 700);
  }, [status, setStatus])
  return <>
    <div className={styles.root}>
      <h1 className={`${styles.head} ${zenOldMincho_w400.className} ${status ? styles.isActive : ''}`}>
        <Typing 
          text={'Hello Tsukasa Tomioka Portfolio. ver4.0'} 
          speed={1} 
          trigger={status}
          initDisplay={false} 
        />
      </h1>
    </div>
  </>
}
