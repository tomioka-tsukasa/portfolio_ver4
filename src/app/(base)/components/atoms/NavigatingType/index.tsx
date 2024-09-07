'use client'

import { useAppSelector } from "@/lib/store/hook";
import styles from "./_index.module.scss";
import Typing from "@/components/atoms/Typing";
import { zenOldMincho_w400 } from "@/lib/fonts";

export default function NavigatingType() {
  const navigationCtrl = useAppSelector(selector => selector.navigationCtrl)
  return <>
    <div className={styles.root} data-style={'navigatingType'}>
      <p className={`${styles.navigatingType} ${zenOldMincho_w400.className}`}>
        <Typing 
          text={navigationCtrl.nextPath}
          initDisplay={false}
          speed={1}
        />
      </p>
    </div>
  </>
}
