import React from "react"
import styles from "./_index.module.scss"

type Props = {
  children: React.ReactNode | string,
  href: string,
  tag?: 'a' | 'button'
}

export default async function Button({
  children,
  href,
  tag = 'a'
}: Props ) {
  return <>
    {React.createElement(
      tag,
      {
        className: `${styles.root}`,
        href: href ? href : undefined,
        target: href.includes('http') ? '_blank' : undefined
      },
      children
    )}
  </>
}
