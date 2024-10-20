import { Ctrl, IsConvert } from "./types";

export const nextSegment = (
  ctrl: Ctrl
) => {
  ctrl.segment.index++
}

export const isConvert: IsConvert = () => {
  return {
    start(element) {
      if (
        element
        && element.dataset.typingInteraction === 'convert'
      ) {
        element.dataset.typingStatus = 'isConvert'
      }
    },
    end(element) {
      if (
        element
        && element.dataset.typingInteraction === 'convert'
      ) {
        element.dataset.typingStatus = 'isDone'
      }
    }
  }
}

