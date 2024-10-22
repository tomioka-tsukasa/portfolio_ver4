import { isConvert } from "../../statics"
import { ifNaturalTag, ifSelfTag, typeTagElement } from "./statics"
import { TypeInTagInit } from "./types"

export const typeInTagInit: TypeInTagInit = (
  target,
  ctrl,
  store
) => {
  let isInTag: boolean = false
  let tagElement: HTMLElement | null = null
  return {
    typeFunc() {
      if (
        !ctrl.segment.current
        || !target
      ) return
      if (!isInTag) {
        target.innerHTML += `${ctrl.segment.current.startTag}${ctrl.segment.current.endTag ?? ''}`
        tagElement = target.querySelector(`[data-typing-id="${ctrl.segment.current.id}"]`)
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
        isConvert(store).end(tagElement)
      }
    }
  }
}
