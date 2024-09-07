import { setNode, typing } from "./assets"

type FunctionType = (
  target: HTMLElement | null,
  setText?: string | null,
  speed?: number,
  endCallback?: any
) => void

export const typingAnimation: FunctionType = (
  target,
  setText = null,
  speed,
  endCallback = () => {}
) => {
  if (!target) return
  const text = setText || target.innerText
  const textList = text.split('')
  setNode(target)
  typing(target, textList, speed, endCallback)
}
