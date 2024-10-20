import { isConvert } from "../../utils"
import { ifNaturalTag, ifSelfTag, typeTagElement } from "./statics"
import { TypeInTag } from "./types"

let isInTag: boolean = false
let tagElement: HTMLElement | null

export const typeInTag: TypeInTag = (
  target,
  ctrl,
  store
) => {
  if (
    !ctrl.segment.current
    || !target
  ) return
  if (!isInTag) {
    target.innerHTML += `${ctrl.segment.current.startTag}${ctrl.segment.current.endTag ?? ''}`
    tagElement = document.querySelector(`[data-typing-id="${ctrl.segment.current.id}"]`)
    if (ctrl.segment.current.endTag) ifNaturalTag(
      tagElement,
      ctrl,
      store
    )
    else ifSelfTag(
      tagElement,
      ctrl,
      store
    )
  }
  typeTagElement(
    tagElement,
    ctrl,
    store
  )
  if (ctrl.segment.current.content.length === 0) {
    isInTag = false
    store.status.type = 'text'
    ctrl.segment.index++
    isConvert().end(tagElement)
  }
}
