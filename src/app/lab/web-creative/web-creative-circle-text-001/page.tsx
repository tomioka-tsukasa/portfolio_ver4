'use client'

import { useState } from "react"
import styles from "./_index.module.scss"
import CircleText from "./components/ui/CircleText"
import InputPanel from "./components/ui/InputPanel"
import { Member } from "./types"

export default function WebCreativeCircleText() {
  const [member, setMember] = useState<Member | null>(null)
  return <>
    <div className={styles.root}>
      <div className={styles.panel}>
        <InputPanel setMember={setMember} />
      </div>
      <div className={styles.visual}>
        <CircleText 
          text={member?.text ?? 'HELLO WORLD HELLO WORLD '}
          option={member?.option ?? {
            radius: 120,
            fontSpace: 0.8,
            background: true,
            backgroundColor: '#000000',
            backgroundStyle: 'solid'
          }}
        />
      </div>
    </div>
  </>
}
