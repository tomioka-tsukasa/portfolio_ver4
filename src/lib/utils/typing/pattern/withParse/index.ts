import { parseHTML } from "../../modules/parseHTML"
import { TypeAhead } from "../../modules/typeAhead"
import { getAheadElm, getBodyElm } from "./statics/getElm"
import { typeSegments } from "../../modules/typeSegments"
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
  const typeAhead = new TypeAhead(
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
      || !typeAhead
    ) return false
    timestamp++
    if (store.whatType === 'tag') {
      if (timestamp % 3 !== 0) return true
    }
    typeAhead.exec(typeList)
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
