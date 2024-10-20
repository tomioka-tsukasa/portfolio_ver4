import { typeInTag } from "./statics/typeInTag"
import { Ctrl, TypeSegments } from "./types"
import { nextSegment } from "./utils"

const ctrl: Ctrl = {
  char: '',
  segment: {
    current: undefined,
    index: 0
  },
}

export const typeSegments: TypeSegments = (
  segments,
  target,
  store
) => {
  if (!target) return null

  ctrl.segment.current = segments[ctrl.segment.index]
  if (!ctrl.segment.current) return null

  ctrl.char = ctrl.segment.current.content.shift() + ''

  if (ctrl.segment.current.type === 'tag') {
    typeInTag(
      target,
      ctrl,
      store
    )
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
