import { TypeItem } from "../../types"

export type TypingWithParse = (
  types: string,
  target: HTMLElement | null,
  store: Record<string, any>
) => {
  typeFunc: TypeItem['typeFunc']
}
