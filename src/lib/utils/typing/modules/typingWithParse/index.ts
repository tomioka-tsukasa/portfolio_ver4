import { parseHTML } from "../parseHTML"
import { getBodyElm } from "./statics/getElm"
import { typeBody } from "./statics/typeBody"
import { typeSegments } from "./statics/typeSegments"
import { TypingWithParse } from "./types"

export const typingWithParse: TypingWithParse = (
  types,
  target,
  store
) => {
  if (target) {
    target.appendChild(getBodyElm('body'))
  }
  const body = document.querySelector('[data-typing-id="body"]') as HTMLElement
  let timestamp: number = 0
  const segments = parseHTML(types)
  const typeFunc = () => {
    if (
      !target
    ) return false
    timestamp++
    return typeSegments(
      segments,
      body,
      store
    )
  }

  return {
    typeFunc
  }
}
