import { getAheadElm, getBodyElm } from "./statics/getElm"
import { typeAhead } from "./statics/typeAhead"
import { typeBody } from "./statics/typeBody"
import { TypingLookahead } from "./types"

export const typingLookahead: TypingLookahead = (
  types,
  target,
) => {
  if (target) {
    target.appendChild(getBodyElm('body'))
    target.appendChild(getAheadElm('ahead'))
  }
  const body = document.querySelector('[data-typing-id="body"]') as HTMLElement
  const ahead = document.querySelector('[data-typing-id="ahead"]') as HTMLElement
  let timestamp: number = 0
  let typeList: Array<string> = types.split('')
  const ta = typeAhead(
    ahead
  )
  const typeFunc = () => {
    if (
      !target
      || !ta
    ) return false
    if (typeList.length) {
      if (
        timestamp === 20
        || timestamp === 0
      ) {
        ta.set(
          typeList.filter((l, i) => i < 20)
        )
        ta.exec()
        timestamp = 0
      }
      typeList = typeBody(
        typeList,
        body,
        timestamp
      )
      ta.exec()
      timestamp++
      return true
    } else {
      ahead.innerHTML = ''
      return false
    }
  }

  return {
    typeFunc
  }
}
