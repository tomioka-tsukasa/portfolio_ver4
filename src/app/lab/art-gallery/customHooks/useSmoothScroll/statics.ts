import { easeIn } from "./easing"
import { CtrlTarget, Scroll, ScrollAuto, TouchCtrl } from "./types"

const ctrlTarget: CtrlTarget = (
  element,
  target
) => {
  const max = element.scrollWidth - element.clientWidth
  const min = 0
  return Math.max(min, Math.min(max, target))
}

const smoothScroll: Scroll = (
  element,
  target,
  duration,
  easingFunction,
  status
) => {
  const start = element.scrollLeft
  target = ctrlTarget(element, element.scrollLeft + target)
  const distance = target - start
  let startTime: number | null = null
  const animation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime
    const timeElapsed = currentTime - startTime
    const run = easingFunction(timeElapsed, duration, distance, start)
    element.scrollLeft = run
    if (timeElapsed < duration && !status.active) {
      requestAnimationFrame(animation)
    }
  }
  requestAnimationFrame(animation)
}

const smoothScrollAuto: ScrollAuto = (
  element,
  speed = 1,
  status,
  easeInTime = 300,
) => {
  let startTime: number | null = null
  const animation = (currentTime: number) => {
    if (startTime === null) startTime = currentTime
    const timeElapsed = currentTime - startTime
    element.scrollLeft += Math.min(1, easeIn(timeElapsed, easeInTime)) * speed
    if (status.active) {
      requestAnimationFrame(animation)
    }
  }
  requestAnimationFrame(animation)
}

const touchCtrl: TouchCtrl = (
  trigger,
  direction,
  onTouchStart,
  onTouchEnd
) => {
  trigger.addEventListener('touchstart', () => {
    console.log('touchstart')
    onTouchStart(direction)
  })
  trigger.addEventListener('touchend', () => {
    console.log('touchend')
    onTouchEnd(direction)
  })
  trigger.addEventListener('mousedown', () => {
    console.log('mousedown')
    onTouchStart(direction)
  })
  trigger.addEventListener('mouseup', () => {
    console.log('mouseup')
    onTouchEnd(direction)
  })
}

export { ctrlTarget, smoothScroll, smoothScrollAuto, touchCtrl }
