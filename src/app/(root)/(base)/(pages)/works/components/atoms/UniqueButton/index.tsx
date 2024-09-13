'use client'

import { zenOldMincho_w700 } from "@/lib/fonts"
import styles from "./_index.module.scss"
import Link from "next/link"
import { useRouter } from "next/navigation"

type Props = {
  children?: React.ReactNode | string,
  url?: string,
  back?: boolean
}

export default function UniqueButton({
  children = 'VIEW MORE',
  url = '/',
  back = false,
}: Props ) {
  const router = useRouter()
  const backClickHander = () => {
    router.back()
  }
  children || (children = 'VIEW MORE')
  if (back) return <>
    <div className={styles.root}>
      <button className={`${zenOldMincho_w700.className} ${styles.text}`} onClick={backClickHander}>
        {children}
      </button>
    </div>
  </>
  return <>
    <div className={styles.root}>
      <Link 
        href={url}
        target={url?.includes('http') ? '_blank' : undefined}
        className={`${zenOldMincho_w700.className} ${styles.text}`}
      >
        {children}
      </Link>
    </div>
  </>
}
