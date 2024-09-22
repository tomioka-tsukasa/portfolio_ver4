import { BodyMember } from "./types"

const setTarget = (
  target = {x: 0, y: 0},
) => {
  const handler: (event: PointerEvent) => void = (event) => {
    target.x = Math.floor(event.clientX)
    target.y = Math.floor(event.clientY)
  }
  window.addEventListener('pointermove', handler)
}

const setCurrent = (
  pos = {
    target: {x: 0, y: 0},
    current: {x: 0, y: 0},
  },
  node: HTMLElement,
  body: BodyMember
) => {
  const duration = body.duration ?? 1
  const gap = body.gap ?? 1
  const tick: () => number = () => {
    pos.current.x += (pos.target.x - pos.current.x) * duration * gap
    pos.current.y += (pos.target.y - pos.current.y) * duration * gap
    const top = `${Math.floor(pos.current.y) - node.clientHeight / 2}px`
    const left = `${Math.floor(pos.current.x) - node.clientWidth / 2}px`
    node.style.top = top
    node.style.left = left
    requestAnimationFrame(tick)
    return 0
  }
  tick()
}

export { setTarget, setCurrent }
