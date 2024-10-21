import { WatchItemInit } from "./types"

export const watchItemInit: WatchItemInit = (
  doms,
  ctrl
) => {
  return {
    inAnimate(
      store
    ) {
      if (!doms.item || !doms.container || !doms.content) return false
      const firstItem = doms.content.firstElementChild
      if (!firstItem) return false
      if (
        store.progress > (firstItem.clientWidth + (store.gap ? store.gap : 0))
      ) {
        store.progress = 0
      }
      return true
    }
  }
}
