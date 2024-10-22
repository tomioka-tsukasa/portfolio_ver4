import { Ctrl, IsConvert } from "./types";

export const nextSegment = (
  ctrl: Ctrl
) => {
  ctrl.segment.index++
}

export const isConvert: IsConvert = (
  store
) => {
  return {
    start(element) {
      if (
        element
        && element.dataset.typingInteraction === 'convert'
      ) {
        store.status.interaction = 'convert'
        element.dataset.typingStatus = 'isConvert'
      }
    },
    end(element) {
      if (
        element
        && element.dataset.typingInteraction === 'convert'
      ) {
        store.status.interaction = ''
        element.dataset.typingStatus = 'isDone'
      }
    }
  }
}
