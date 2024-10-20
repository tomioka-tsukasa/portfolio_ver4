import { isConvert } from "../../statics"
import { ifNaturalTag, ifSelfTag, typeTagElement } from "./statics"
import { TypeInTag } from "./types"

export const typeInTag: TypeInTag = (
  target,
  ctrl,
  store
) => {
  if (
    !ctrl.segment.current
    || !target
  ) return
  if (!ctrl.isInTag) {
    target.innerHTML += `${ctrl.segment.current.startTag}${ctrl.segment.current.endTag ?? ''}`
    ctrl.tagElement = target.querySelector(`[data-typing-id="${ctrl.segment.current.id}"]`)
    if (ctrl.segment.current.endTag) ifNaturalTag(
      ctrl.tagElement,
      ctrl,
      store
    )
    else ifSelfTag(
      ctrl.tagElement,
      ctrl,
      store
    )
  }
  typeTagElement(
    ctrl.tagElement,
    ctrl,
    store
  )
  if (ctrl.segment.current.content.length === 0) {
    ctrl.isInTag = false
    store.status.type = 'text'
    ctrl.segment.index++
    isConvert(store).end(ctrl.tagElement)
  }
}
