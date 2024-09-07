'use client'

import Link, { LinkProps } from "next/link"
import { useClickManager } from "./customHook/useClickManager"

interface Props extends LinkProps {
  children: React.ReactNode,
  className?: string | undefined;
}

export default function Navigation({
  children,
  href,
  className
}: Props ) {
  const clickManager = useClickManager()
  const clickHander = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    clickManager.clickEvent(
      event,
      href.toString()
    )
  }
  return <>
    <Link href={href} onClick={clickHander} className={className}>
      {children}
    </Link>
  </>
}
