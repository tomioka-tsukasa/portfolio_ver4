import { Ctrl, Doms, Store } from "../../types"

export type UpdateContentInit = (
  doms: Doms,
  ctrl: Ctrl | undefined
) => {
  inAnimate: (
    store: Store
  ) => Store
}
