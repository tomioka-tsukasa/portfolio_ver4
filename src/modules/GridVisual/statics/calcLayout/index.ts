import { CalcLayout } from "./types"

export const calcLayout: CalcLayout = (
  container,
  option
) => {
  const itemHeight = (innerWidth / 1920) * (option?.itemHeight ?? 150)
  const rowTotal = Math.ceil(document.body.clientHeight / itemHeight)
  const itemTotal = rowTotal * (option?.itemInRowTotal ?? 8)
  const containerHeight = itemHeight * rowTotal
  return {
    itemHeight,
    itemTotal,
    rowTotal,
    containerHeight 
  }
}
