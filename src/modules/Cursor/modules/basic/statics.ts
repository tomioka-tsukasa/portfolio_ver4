import { BodyMember } from "./types"

const setTarget = (
  target = {x: 0, y: 0},
) => {
  const handler: (event: PointerEvent) => void = (event) => {
    target.x = Math.floor(((event.clientX / document.body.clientWidth) - 0.5) * 2 * 100)
    target.y = Math.floor(((event.clientY / document.body.clientHeight) - 0.5) * 2 * 100)
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
    pos.current.x += (pos.target.x - pos.current.x) * duration
    pos.current.y += (pos.target.y - pos.current.y) * duration
    const top = `calc(${50 + (0.5 * pos.current.y * gap)}% - ${node.clientHeight / 2}px)`
    const left = `calc(${50 + (0.5 * pos.current.x * gap)}% - ${node.clientWidth / 2}px)`
    node.style.top = top
    node.style.left = left
    requestAnimationFrame(tick)
    return 0
  }
  tick()
}

export { setTarget, setCurrent }
