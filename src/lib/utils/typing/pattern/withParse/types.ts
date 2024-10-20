import { Store, TypeItem } from "../../types"

export type WithParse = (
  types: string,
  target: HTMLElement | null,
  store: Store
) => {
  typeFunc: TypeItem['typeFunc']
}
