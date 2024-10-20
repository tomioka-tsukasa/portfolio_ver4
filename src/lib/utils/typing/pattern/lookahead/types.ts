import { TypeItem } from "../../types"

export type Lookahead = (
  types: string,
  target: HTMLElement | null,
) => {
  typeFunc: TypeItem['typeFunc']
}
