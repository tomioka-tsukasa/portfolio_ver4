'use client'

import { zenOldMincho_w400 } from "@/lib/fonts";
import styles from "./_index.module.scss";
import Typing from "@/components/atoms/Typing";
import { useState } from "react";

export default function HomeScreen() {
  const [status, setStatus] = useState(true)
  return <>
    <div className={styles.root}>
      <h1 className={`${styles.head} ${zenOldMincho_w400.className}`}>
        <Typing 
          text={'Hello Tsukasa Tomioka Portfolio. ver4.0'} 
          speed={1} 
          initDisplay={false} 
        />
      </h1>
    </div>
  </>
}
