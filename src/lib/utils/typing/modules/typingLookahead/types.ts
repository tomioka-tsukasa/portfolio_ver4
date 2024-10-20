import { TypeItem } from "../../types"

export type TypingLookahead = (
  types: string,
  target: HTMLElement | null,
) => {
  typeFunc: TypeItem['typeFunc']
}
