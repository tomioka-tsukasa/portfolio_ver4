import { Segment } from "../../../parseHTML/types"
import { TypeSegments } from "./types"

let currentIndex: number = 0
let currentSegment: Segment
let isInTag: boolean = false
let tagElemment: HTMLElement | null = null

export const typeSegments: TypeSegments = (
  segments,
  target,
  store
) => {
  currentSegment = segments[currentIndex]
  if (!target || !currentSegment) return false;

  const char = currentSegment.content.shift()

  if (currentSegment.type === 'tag') {
    if (!isInTag) {
      target.innerHTML += `${currentSegment.startTag}${currentSegment.endTag ?? ''}`
      if (currentSegment.endTag) {
        tagElemment = document.querySelector(`[data-typing-id="${currentSegment.id}"]`)
        if (tagElemment) {
          tagElemment.dataset.typingStatus = 'isTyping'
        }
        isInTag = true
        store.whatType = 'tag'
      } else {
        currentIndex++
      }
    }
    if (tagElemment && char) {
      tagElemment.innerHTML += char
    }
    if (currentSegment.content.length === 0) {
      isInTag = false
      store.whatType = 'text'
      currentIndex++
      if (tagElemment) {
        tagElemment.dataset.typingStatus = 'isDone'
      }
    }
  } else {
    if (char) {
      target.innerHTML += char
    }
    if (currentSegment.content.length === 0) {
      currentIndex++
    }
  }

  return true
}
