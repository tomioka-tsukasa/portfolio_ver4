'use client'

import Link from "next/link"

export default function TabChanger() {
  return <>
    <ul>
      <li>
        <Link href="/learning/tab-group/content01" >Content01</Link>
      </li>
      <li>
        <Link href="/learning/tab-group/content02">Content02</Link>
      </li>
    </ul>
  </>
}
