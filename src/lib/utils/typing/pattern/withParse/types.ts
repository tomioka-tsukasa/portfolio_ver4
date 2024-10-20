import { TypeItem } from "../../types"

export type WithParse = (
  types: string,
  target: HTMLElement | null,
  store: Record<string, any>
) => {
  typeFunc: TypeItem['typeFunc']
}
