import { Option } from "../../types"

export type SetContainer = (
  element: HTMLElement | null,
  option?: Record<string, any>
) => HTMLElement | null

export type SetContent = (
  element: HTMLElement | null,
  option?: Option
) => HTMLElement | null

export type SetItem = (
  item: HTMLElement | null,
  content: HTMLElement | null,
  container: HTMLElement | null,
  option?: Record<string, any>
) => HTMLElement | null
