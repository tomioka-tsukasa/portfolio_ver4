import { SetItems } from "./types";

const getItemTag = (
  count: number,
  itemInRow: number
) => {
  return `<span data-grid-visual-id="item" data-grid-visual-item="${count}" data-grid-visual-itemInRow="${itemInRow}">`
}

const getRowTag = (
  number: number,
) => {
  return `<div data-grid-visual-id="row" data-grid-visual-row="${number}">`
}

const setStyle = () => {
  const style = document.createElement('style')
  style.innerHTML = `
    [data-grid-visual-id="row"] {
      display: table-row;
    }

    [data-grid-visual-id="item"] {
      display: table-cell;
    }
  `
  document.head.appendChild(style)
}

export const setItems: SetItems = (
  container,
  layout,
  option
) => {
  if (!container) return false

  let print: string = ''

  let rowCount: number = 1
  for (let i = 1; i < layout.itemTotal; i++) {
    if (i % (option?.itemInRowTotal ?? 8) === 0) {
      rowCount++
      print += `${getItemTag(i, rowCount)}</span></div>${getRowTag(rowCount)}`
    } else {
      print += `${getItemTag(i, rowCount)}</span>`
    }
    if (i === layout.itemTotal - 1) {
      print += `${getItemTag(i++, rowCount)}</span>`
    }
  }

  container.innerHTML = `${getRowTag(1)}${print}</div>`

  setStyle()

  return true
}
