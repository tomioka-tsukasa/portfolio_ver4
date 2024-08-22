'use client'

import styles from "./_index.module.scss"
import React from "react";
import useNavigationAction from "@/lib/customHooks/useNavigationAction";
import injectCodePrettify from "@/lib/utils/injectCodePrettify";
import formatMarkdown from "@/lib/utils/formatMarkdown";

type DesignMode = 'light' | 'dark'

type Props = {
  mode?: DesignMode,
  children: string,
}

export default function MarkdownStyle({
  mode = 'dark',
  children,
}: Props ) {
  useNavigationAction({
    callback: () => {
      injectCodePrettify()
    }
  })
  return <div className={`${styles.root} ${styles[mode]}`}>
    {formatMarkdown({
      body: children,
      styles
    })}
  </div>
}
