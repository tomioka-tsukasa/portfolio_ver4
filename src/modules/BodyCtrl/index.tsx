'use client'

import { zenKakuGothicNew_w400 } from "@/lib/fonts";
import styles from "./_index.module.scss"
import { usePathname } from "next/navigation";

interface Props {
  children: React.ReactNode,
}

export default function BodyCtrl({
  children
}: Props ) {
  const pathname = usePathname()
  return <>
    <body 
      className={`${styles.root} ${zenKakuGothicNew_w400.className}`} 
      id={pathname === '/' ? 'home' : pathname.split('/').filter(p => p).join('-')}
    >
      {children}
    </body>
  </>
}
