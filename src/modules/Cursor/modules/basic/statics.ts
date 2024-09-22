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
  target = {x: 0, y: 0},
  current = {x: 0, y: 0},
  node: HTMLElement,
  duration: number,
) => {
  const tick: () => number = () => {
    current.x += (target.x - current.x) * duration
    current.y += (target.y - current.y) * duration
    const top = `${Math.floor(current.y) - node.clientHeight / 2}px`
    const left = `${Math.floor(current.x) - node.clientWidth / 2}px`
    node.style.top = top
    node.style.left = left
    requestAnimationFrame(tick)
    return 0
  }
  tick()
}

export { setTarget, setCurrent }
