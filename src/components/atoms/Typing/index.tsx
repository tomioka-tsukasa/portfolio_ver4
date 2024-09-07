'use client'

import { typingAnimation } from "@/lib/utils/typingAnimation"
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
    trigger && typingAnimation(
      ref.current,
      initDisplay ? '' : text,
      speed,
      endCallback
    )
  }, [ref, text, initDisplay, trigger])
  return <>
    <p ref={ref} style={{
      whiteSpace: 'pre-wrap'
    }}>
      {initDisplay ? text : ''}
    </p>
  </>
}
