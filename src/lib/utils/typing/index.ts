import { AnimationFrameId, Exec, Store, TypeItem } from "./types";

export class Typing {
  constructor() {
  }

  store: Store = {
    stop: false,
    status: {
      type: ''
    }
  }

  exec: Exec = (
    name,
    typeFunc,
    endFunc
  ) => {
    let animationFrameId: AnimationFrameId = 0
    const typeItem: TypeItem = {
      name,
      typeFunc,
      endFunc,
      working: true
    }
    const tick = (
      timeStamp: DOMHighResTimeStamp
    ) => {
      typeItem.working = typeItem.typeFunc()
      typeItem.endFunc && (typeItem.working || typeItem.endFunc())
      animationFrameId = requestAnimationFrame(tick)
      if (
        this.store.stop
        || !typeItem.working
      ) cancelAnimationFrame(animationFrameId)
    }
    animationFrameId = requestAnimationFrame(tick)
    return typeItem
  }

  stop = () => {
    this.store.stop = true
  }
}
