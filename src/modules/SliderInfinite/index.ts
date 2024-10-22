import { setContainer, setContent, setItem } from "./statics/setDom";
import { updateContentInit } from "./statics/updateContentInit";
import { watchItemInit } from "./statics/watchItemInit";
import { Ctrl, Doms, Exec, Option, Store } from "./types";

export class SliderInfinite {
  constructor(
    rootElem: HTMLElement | null,
    option?: Option
  ) {
    if (!rootElem) return
    const container = setContainer(
      rootElem.querySelector('[data-slider-ifnt-id="container"]')
    )
    const content = setContent(
      rootElem.querySelector('[data-slider-ifnt-id="content"]'),
      option
    )
    const item = setItem(
      rootElem.querySelector('[data-slider-ifnt-id="item"]'),
      content,
      container
    )
    this.doms.container = container
    this.doms.content = content
    this.doms.item = item
    this.store.gap = (option?.gap ? option.gap : 0)
  }

  doms: Doms = {
    container: null,
    content: null,
    item: null
  }

  ctrl: Ctrl = {}

  store: Store = {
    progress: 0,
    gap: 0
  }

  exec: Exec = (
    doms,
    ctrl
  ) => {
    let animationFrameId: number = 0;
    const updateContent = updateContentInit(doms, ctrl)
    const watchItem = watchItemInit(doms, ctrl)
    const tick = (
      timeStamp: DOMHighResTimeStamp
    ) => {
      updateContent.inAnimate(this.store)
      watchItem.inAnimate(this.store)
      if (ctrl?.stop) cancelAnimationFrame(animationFrameId)
      else (animationFrameId = requestAnimationFrame(tick))
    }
    animationFrameId = requestAnimationFrame(tick)
  }
}
