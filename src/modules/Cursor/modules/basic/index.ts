import { setHover } from "../attachments/setHover"
import { setCurrent, setTarget } from "./statics"
import { BodyMember } from "./types"

export class Cursor {
  constructor(
    bodys: Array<BodyMember>,
    hovers?: string,
    attachment?: any,
  ) {
    bodys.map( body => {
      this.setPointer(body)
    })
    setHover(
      bodys.map( body => body.name).join(','),
      hovers
    )
    attachment && attachment()
  }

  private setPointer(body: BodyMember) {
    const node: HTMLElement | null = document.querySelector(body.name)
    if (!node) return
    this.mover(node, body)
  }

  private mover: (
    node: HTMLElement,
    body: BodyMember
  ) => void = (
    node,
    body,
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
      {
        target: posTarget,
        current: posCurrent,
      },
      node,
      body
    )
  }
}
