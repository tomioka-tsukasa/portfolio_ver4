import React from "react";
import ThemeProvider from "./theme-provider";

export default function Layout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>
    <ThemeProvider>
      {children}
    </ThemeProvider>
  </>
}
