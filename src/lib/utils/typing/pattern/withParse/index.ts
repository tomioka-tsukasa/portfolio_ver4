import { parseHTML } from "../../modules/parseHTML"
import { getAheadElm, getBodyElm } from "./statics/getElm"
import { typeAhead } from "./statics/typeAhead"
import { typeBody } from "./statics/typeBody"
import { typeSegments } from "./statics/typeSegments"
import { WithParse } from "./types"

export const withParse: WithParse = (
  types,
  target,
  store
) => {
  if (target) {
    target.appendChild(getBodyElm('body'))
    target.appendChild(getAheadElm('ahead'))
  }
  const body = document.querySelector('[data-typing-id="body"]') as HTMLElement
  const ahead = document.querySelector('[data-typing-id="ahead"]') as HTMLElement
  let timestamp: number = 0
  let working: boolean = true
  const segments = parseHTML(types)
  const ta = typeAhead(
    ahead
  )
  // let typeList: Array<string> = types.split('')
  let typeList: Array<string> = segments.map( segment => {
    return segment.content.join('')
  }).join('').split('')
  console.log(typeList)
  const typeFunc = () => {
    if (
      !target
      || !ta
    ) return false
    timestamp++
    if (store.whatType === 'tag') {
      if (timestamp % 4 !== 0) return true
    }
    if (
      !ta.exec().length
    ) {
      ta.set(
        typeList.filter((l, i) => i < 30)
      )
    }
    typeList.shift()
    working = typeSegments(
      segments,
      body,
      store
    )
    if (working) return working
    else {
      ahead.innerHTML = ''
      return working
    }
  }

  return {
    typeFunc
  }
}
