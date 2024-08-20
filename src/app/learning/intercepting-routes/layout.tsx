import Link from "next/link"
import React from "react"

export default function Layout({
  children,
  modal,
}: {
  children: React.ReactNode,
  modal: React.ReactNode,
}) {
  return <>
    <h1>
      ./layout.tsx
    </h1>
    {children}
    <ul>
      <li>
        <Link href={'/learning/intercepting-routes/work'}>work</Link>
      </li>
      <li>
        <Link href={'/learning/intercepting-routes/about'}>about</Link>
      </li>
    </ul>
    {modal}
  </>
}
