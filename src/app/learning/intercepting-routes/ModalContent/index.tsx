'use client'

import { useRouter } from "next/navigation"
import styles from "./_index.module.scss"
import React from "react"
import Link from "next/link"

export default function ModalWrapper({
  children
}: {
  children: React.ReactNode
}) {
  const router = useRouter()
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
      <Link href={'/learning/intercepting-routes/'}>home</Link>
    </div>
  </div>
}
