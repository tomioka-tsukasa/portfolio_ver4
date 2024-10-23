export type Doms = {
  container: HTMLElement | null,
}

export type Layout = {
  itemHeight: number,
  itemTotal: number,
  rowTotal: number,
  containerHeight: number
}

export type Set = () => boolean

export type Option = {
  itemInRowTotal?: number,
  itemHeight?: number,
} | undefined

export type SetDefaultOption = (
  option: Option
) => Option
