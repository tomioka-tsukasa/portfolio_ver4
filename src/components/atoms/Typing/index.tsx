'use client'

import { TypingAnimation } from "@/lib/utils/typingAnimation"
import { useEffect, useRef } from "react"

type Props = {
  text: string,
  initDisplay?: boolean
  speed?: number,
  trigger?: boolean
  endCallback?: any
}

export default function Typing({
  text,
  initDisplay = true,
  speed = 2,
  trigger = true,
  endCallback = () => {}
}: Props ) {
  const ref = useRef<HTMLParagraphElement>(null)
  useEffect(() => {
    if (!ref.current) return
    new TypingAnimation(
      ref.current,
      text,
      initDisplay,
    ).start(
      ref.current,
      text,
      speed,
      endCallback
    )
  }, [ref, text, initDisplay, speed, trigger, endCallback])
  return <>
    <span ref={ref} style={{
      whiteSpace: 'pre-wrap'
    }} />
  </>
}
