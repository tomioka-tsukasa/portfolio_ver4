import { parseHTML } from "../../modules/parseHTML"
import { typeAheadInit } from "../../modules/typeAheadInit"
import { getAheadElm, getBodyElm } from "./statics/getElm"
import { typeSegmentsInit } from "../../modules/typeSegmentsInit"
import { TypingPattern } from "../../types"

export const withParse: TypingPattern = (
  types,
  target,
  store,
  option
) => {
  let timestamp: number = 0
  let segment: ReturnType<ReturnType<typeof typeSegmentsInit>['typeFunc']> = null
  if (target) {
    target.appendChild(getBodyElm('body'))
    target.appendChild(getAheadElm('ahead'))
  }
  const body = target?.querySelector('[data-typing-id="body"]') as HTMLElement
  const ahead = target?.querySelector('[data-typing-id="ahead"]') as HTMLElement
  const segments = parseHTML(types)
  const typeAhead = typeAheadInit(
    ahead
  )
  const typeSegments = typeSegmentsInit(
    segments,
    body,
    store,
  )
  const typeFunc = () => {
    if (
      !target
      || !typeAhead
    ) return false
    timestamp++
    if (timestamp % (option?.speed ?? 1) !== 0) return true
    if (store.status.interaction === 'convert') {
      if (timestamp % (option?.convertSpeed ?? 1) !== 0) return true
    }
    segment = typeSegments.typeFunc()
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
