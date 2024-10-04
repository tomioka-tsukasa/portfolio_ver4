import { easeOutQuart } from "./easing";
import { smoothScroll, smoothScrollAuto, touchCtrl } from "./statics"
import { ScrollDirection } from "./types";

export const useSmoothScroll = () => {
  const container = document.getElementById('scroll-container') as HTMLElement | null;
  const buttonRight = document.getElementById('scroll-right') as HTMLElement | null;
  const buttonLeft = document.getElementById('scroll-left') as HTMLElement | null;
  if (
    !container
    || !buttonRight
    || !buttonLeft
  ) return 
  const autoScroll = {
    active: true, 
  }
  const onTouchScroll = {
    active: false, 
  }
  const onTouchStart = (
    direction: ScrollDirection
  ) => {
    if (!onTouchScroll.active) {
      onTouchScroll.active = true
      autoScroll.active = false
      smoothScrollAuto(
        container,
        direction === 'next' ? 9 : -9,
        onTouchScroll
      )
    }
  }
  const onTouchEnd = (
    direction: ScrollDirection
  ) => {
    if (onTouchScroll.active) {
      onTouchScroll.active = false
      autoScroll.active = true
      smoothScrollAuto(
        container,
        0.5,
        autoScroll
      )
      smoothScroll(
        container,
        direction === 'next' ? 36 : -36,
        1400,
        easeOutQuart,
        onTouchScroll
      )
    }
  }
  touchCtrl(
    buttonRight,
    'next',
    onTouchStart,
    onTouchEnd
  )
  touchCtrl(
    buttonLeft,
    'prev',
    onTouchStart,
    onTouchEnd
  )
  smoothScrollAuto(
    container,
    0.5,
    autoScroll
  )
}
