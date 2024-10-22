import { Ctrl, Doms, Store } from "../../types"

export type WatchItemInit = (
  doms: Doms,
  ctrl: Ctrl | undefined
) => {
  inAnimate: (
    store: Store
  ) => boolean
}
