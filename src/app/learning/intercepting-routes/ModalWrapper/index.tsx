'use client'

import { usePathname, useRouter } from "next/navigation"
import styles from "./_index.module.scss"
import React, { useEffect, useState } from "react"
import Link from "next/link"

export default function ModalWrapper({
  children
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
  // const path = usePathname()
  // const [state, setState] = useState(false)
  // useEffect(() => {
  //   console.log(state)
  // }, [state])
  console.log('Rendering.')
  return <div className={styles.root} id="modal-wrapper">
    <div className={styles.inner}>
      <p>
        /ModalWrapper/index.tsx
      </p>
      <p>
        {'{children} ↓'}
      </p>
      {children}
      <ul>
        <li>
          <Link href={'/learning/intercepting-routes/work'}>work</Link>
        </li>
        <li>
          <Link href={'/learning/intercepting-routes/about'}>about</Link>
        </li>
      </ul>
      <button onClick={() => {
        router.back()
      }}>Back</button>
      <Link href={'/learning/intercepting-routes/'}>Home</Link>
    </div>
  </div>
}
