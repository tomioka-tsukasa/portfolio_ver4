import { TypeAhead } from "../../modules/typeAhead"
import { getAheadElm, getBodyElm } from "./statics/getElm"
import { typeBody } from "./statics/typeBody"
import { Lookahead } from "./types"

export const lookahead: Lookahead = (
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
  const typeAhead = new TypeAhead(
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
      ahead.innerHTML = ''
      return false
    }
  }

  return {
    typeFunc
  }
}
