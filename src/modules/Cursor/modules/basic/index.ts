import { setHover } from "../attachments/setHover"
import { setCurrent, setTarget } from "./statics"
import { CursorOption } from "./types"

export class Cursor {
  constructor(
    bodys: Array<CursorOption>,
    hovers?: string,
    attachment?: any,
  ) {
    bodys.map( body => {
      this.setPointer(
        body.bodyName,
        body.duration
      )
    })
    setHover(
      bodys.map( body => body.bodyName).join(','),
      hovers
    )
    attachment && attachment()
  }

  private setPointer(
    bodyName: string,
    duration: number,
  ) {
    const node: HTMLElement | null = document.querySelector(bodyName)
    if (!node) return
    this.mover(node, duration)
  }

  private mover: (
    node: HTMLElement,
    duration: number,
  ) => void = (
    node,
    duration,
  ) => {
    const posTarget = {
      x: 0,
      y: 0
    }
    const posCurrent = {
      x: 0,
      y: 0
    }
    setTarget(
      posTarget,
    )
    setCurrent(
      posTarget,
      posCurrent,
      node,
      duration
    )
  }
}
