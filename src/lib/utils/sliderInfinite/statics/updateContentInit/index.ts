import { UpdateContentInit } from "./types"

export const updateContentInit: UpdateContentInit = (
  doms,
  ctrl
) => {
  return {
    inAnimate(
      store
    ) {
      if (!doms.content) return store
      doms.content.style.transform = `translateX(-${store.progress}px)`
      if (ctrl?.speed) {
        store.progress = store.progress + ctrl.speed
      } else {
        store.progress++
      }
      return store
    }
  }
}
