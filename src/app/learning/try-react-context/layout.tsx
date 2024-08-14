import React from "react";
import ThemeProvider from "./theme-provider";

export default function DashboardLayout({
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
