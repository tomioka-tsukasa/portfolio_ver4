import { typeAheadInit } from "../../modules/typeAheadInit"
import { TypingPattern } from "../../types"
import { getAheadElm, getBodyElm } from "./statics/getElm"
import { typeBody } from "./statics/typeBody"

let timestamp: number = 0

export const lookahead: TypingPattern = (
  types,
  target,
  store,
  option
) => {
  if (target) {
    target.appendChild(getBodyElm('body'))
    target.appendChild(getAheadElm('ahead'))
  }
  const body = target?.querySelector('[data-typing-id="body"]') as HTMLElement
  const ahead = target?.querySelector('[data-typing-id="ahead"]') as HTMLElement
  let typeList: Array<string> = types.split('')
  const typeAhead = typeAheadInit(
    ahead
  )
  const typeFunc = () => {
    if (
      !target
      || !typeAhead
    ) return false
    if (typeList.length) {
      timestamp++
      typeAhead.exec(typeList)
      typeList = typeBody(
        typeList,
        body,
        timestamp
      )
      return true
    } else {
      typeAhead.reset()
      return false
    }
  }

  return {
    typeFunc
  }
}
