import { typeInTagInit } from "./statics/typeInTagInit"
import { Ctrl, TypeSegmentsInit } from "./types"
import { nextSegment } from "./statics"

export const typeSegmentsInit: TypeSegmentsInit = (
  segments,
  target,
  store,
) => {
  const ctrl: Ctrl = {
    char: '',
    segment: {
      current: undefined,
      index: 0
    },
  }
  const typeInTag = typeInTagInit(
    target,
    ctrl,
    store
  )
  return {
    typeFunc() {
      if (!target) return null

      ctrl.segment.current = segments[ctrl.segment.index]
      if (!ctrl.segment.current) return null
    
      ctrl.char = ctrl.segment.current.content.shift() + ''
    
      if (ctrl.segment.current.type === 'tag') {
        typeInTag.typeFunc()
      } else {
        if (ctrl.char) {
          target.innerHTML += ctrl.char
        }
        if (ctrl.segment.current.content.length === 0) {
          nextSegment(ctrl)
        }
      }
    
      return ctrl.segment.current
    }
  }
}
