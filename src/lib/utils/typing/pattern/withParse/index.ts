import { parseHTML } from "../../modules/parseHTML"
import { TypeAhead } from "../../modules/typeAhead"
import { getAheadElm, getBodyElm } from "./statics/getElm"
import { typeSegments } from "../../modules/typeSegments"
import { WithParse } from "./types"

let timestamp: number = 0
let segment: ReturnType<typeof typeSegments> = null

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
  const segments = parseHTML(types)
  const typeAhead = new TypeAhead(
    ahead
  )
  const typeFunc = () => {
    if (
      !target
      || !typeAhead
    ) return false
    timestamp++
    if (store.status.type === 'tag') {
      if (timestamp % 3 !== 0) return true
    }
    segment = typeSegments(
      segments,
      body,
      store
    )
    if (segment) {
      typeAhead.exec(segment.content)
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
