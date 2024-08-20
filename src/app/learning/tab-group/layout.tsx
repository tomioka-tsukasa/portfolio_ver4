import React from "react"
import TabChanger from "./components/TabChanger"

export default function TabLayout({
  content,
  children,
}: {
  content: React.ReactNode,
  children: React.ReactNode,
}) {
  return <>
    <h2>
      TabLayout.
    </h2>
    <TabChanger />
    {content}
    {children}
  </>
}
