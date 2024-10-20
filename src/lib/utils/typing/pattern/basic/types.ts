import { TypeItem } from "../../types"

export type Basic = (
  types: string,
  target: HTMLElement | null,
) => {
  typeFunc: TypeItem['typeFunc']
}
