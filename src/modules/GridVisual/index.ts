import { calcLayout } from "./statics/calcLayout"
import { setItems } from "./statics/setItems"
import { SetDefaultOption, Doms, Layout, Option, Set } from "./types"

export class GridVisual {
  constructor(
    rootElem: HTMLElement | null,
    option?: Option
  ) {
    if (!rootElem || !innerWidth || !document) return
    const container: HTMLElement | null = rootElem.querySelector('[data-grid-visual-id="container"]')
    if (!container) return
    this.layout = calcLayout(
      container,
      option
    )
    this.doms = {
      container,
    }
    this.option = option
    container.style.height = `${this.layout.containerHeight}px`
  }

  option: Option = {}

  doms: Doms = {
    container: null,
  }

  layout: Layout = {
    itemHeight: 0,
    itemTotal: 0,
    rowTotal: 0,
    containerHeight: 0
  }

  set: Set = () => {
    return setItems(
      this.doms.container,
      this.layout,
      this.option
    )
  }
}
