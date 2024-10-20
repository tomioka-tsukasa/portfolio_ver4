import { GetElm } from "./types"

export const getBodyElm: GetElm = (
  id
) => {
  const elm = document.createElement('span')
  elm.dataset.typingId = id
  return elm
}

export const getAheadElm: GetElm = (
  id
) => {
  const elm = document.createElement('span')
  const styles: Partial<CSSStyleDeclaration> = {
    opacity: '.3',
  }
  Object.assign(elm.style, styles)
  elm.dataset.typingId = id
  return elm
}
