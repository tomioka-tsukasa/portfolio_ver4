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
  let count: number = 0
  let htmlString: string = ''
  const appendItem = (
    item: HTMLElement,
    content: HTMLElement,
    container: HTMLElement
  ) => {
    count++
    if (content.clientWidth < container.clientWidth * 1.5 && count < 1000) {
      htmlString += item.outerHTML
      appendItem(
        item,
        content,
        container
      )
    }
  }
  appendItem(
    item,
    content,
    container
  )
  content.innerHTML = htmlString
  return item
}
