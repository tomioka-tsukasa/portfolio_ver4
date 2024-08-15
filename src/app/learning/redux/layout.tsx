import React from "react"
import Counted from "./components/Counted/Counted"

export default function Layout({
  children
}: {
  children: React.ReactNode
}) {
  return <>
    <Counted />
    {children}
  </>
}
