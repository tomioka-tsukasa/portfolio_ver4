import { isConvert, nextSegment } from "../../statics"
import { Common } from "./types"

export const ifNaturalTag: Common = (
  tagElement,
  ctrl,
  store
) => {
  if (!ctrl.segment.current) return false
  isConvert(store).start(tagElement)
  store.status.type = 'tag'
  return true
}

export const ifSelfTag: Common = (
  tagElement,
  ctrl,
  store
) => {
  if (!ctrl.segment.current) return false
  nextSegment(ctrl)
  return false
}

export const typeTagElement: Common = (
  tagElement,
  ctrl,
  store
) => {
  if (tagElement && ctrl.char) {
    tagElement.innerHTML += ctrl.char
  }
  return true
}
