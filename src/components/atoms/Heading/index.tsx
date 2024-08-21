import React from "react";
import styles from "./_index.module.scss"
import { zenOldMincho_w700 } from "@/lib/fonts";

type Props = {
  children: React.ReactNode | string,
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'div' | 'span',
  type?: 'border' | string,
  size?: 'large' | 'middle' | 'small' | string
}

export default function Heading({
  children,
  tag = 'h2',
  type = '',
  size = ''
}: Props ) {
  return <>
    {React.createElement(
      tag,
      {
        className: `${styles.root} ${styles[type] ?? ''} ${styles[size] ?? ''} ${zenOldMincho_w700.className}`
      },
      children
    )}
  </>
}
