import { TypeItem } from "../../types"

export type TypingBasic = (
  types: string,
  target: HTMLElement | null,
) => {
  typeFunc: TypeItem['typeFunc']
}
