import { SetContainer, SetContent, SetItem } from "./types"

export const setContainer: SetContainer = (
  element,
  option
) => {
  if (!element) return null
  const styles: Partial<CSSStyleDeclaration> = {
    width: '100%',
    overflow: 'hidden'
  }
  Object.assign(element.style, styles)
  return element
}

export const setContent: SetContent = (
  element,
  option
) => {
  if (!element) return null
  const styles: Partial<CSSStyleDeclaration> = {
    width: 'max-content',
    display: 'flex',
    gap: `0 ${option?.gap ? option.gap : 0}px`
  }
  Object.assign(element.style, styles)
  return element
}

export const setItem: SetItem = (
  item,
  content,
  container,
  option
) => {
  if (!item || !content || !container) return null
  let htmlString: string = ''
  const itemWidth = item.clientWidth
  for (let i = 0; i < Math.ceil((innerWidth * 1.5) / itemWidth); i++) {
    htmlString += item.outerHTML
  }
  content.innerHTML = htmlString
  return item
}
