import { Store, TypeItem } from "../../types"

export type Lookahead = (
  types: string,
  target: HTMLElement | null,
  store: Store
) => {
  typeFunc: TypeItem['typeFunc']
}
