'use client'

import Link, { LinkProps } from "next/link"
import { useClickManager } from "./customHook/useClickManager"

interface Props extends LinkProps {
  children: React.ReactNode,
  className?: string | undefined;
  typing?: boolean,
  scroll?: boolean
}

export default function Navigation({
  children,
  href,
  className,
  typing = true,
  scroll = true
}: Props ) {
  const clickManager = useClickManager()
  const clickHander = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    clickManager.clickEvent(
      event,
      href.toString(),
      typing,
      scroll
    )
  }
  return <>
    <Link href={href} onClick={clickHander} className={className}>
      {children}
    </Link>
  </>
}
