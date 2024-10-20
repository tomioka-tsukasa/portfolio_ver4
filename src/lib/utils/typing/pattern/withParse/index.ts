import { parseHTML } from "../../modules/parseHTML"
import { typeAhead } from "../../modules/typeAhead"
import { getAheadElm, getBodyElm } from "./statics/getElm"
import { typeSegments } from "../../modules/typeSegments"
import { TypingPattern } from "../../types"
import { Ctrl } from "../../modules/typeSegments/types"

export const withParse: TypingPattern = (
  types,
  target,
  store,
  option
) => {
  let timestamp: number = 0
  let segment: ReturnType<typeof typeSegments> = null
  if (target) {
    target.appendChild(getBodyElm('body'))
    target.appendChild(getAheadElm('ahead'))
  }
  const body = target?.querySelector('[data-typing-id="body"]') as HTMLElement
  const ahead = target?.querySelector('[data-typing-id="ahead"]') as HTMLElement
  const segments = parseHTML(types)
  const _typeAhead = typeAhead(
    ahead
  )
  const ctrl: Ctrl = {
    char: '',
    segment: {
      current: undefined,
      index: 0
    },
    isInTag: false,
    tagElement: null,
    types: types
  }
  const typeFunc = () => {
    if (
      !target
      || !_typeAhead
    ) return false
    timestamp++
    if (timestamp % (option?.speed ?? 1) !== 0) return true
    if (store.status.interaction === 'convert') {
      if (timestamp % (option?.convertSpeed ?? 1) !== 0) return true
    }
    segment = typeSegments(
      segments,
      body,
      store,
      ctrl,
    )
    if (segment) {
      _typeAhead.exec(segment.content)
      return true
    } else {
      _typeAhead.reset()
      return false
    }
  }

  return {
    typeFunc
  }
}
