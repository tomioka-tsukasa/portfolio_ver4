export type EasingFunction = (
  t: number, // 経過時間（現在の進行状況）
  d: number, // 合計時間（スクロールにかける時間）
  c: number, // 変化量（スクロールする距離）
  b: number, // 開始位置（スクロールが始まる位置）
) => number

export type EaseIn = (
  t: number, // 経過時間（現在の進行状況）
  d: number, // 合計時間（スクロールにかける時間）
) => number

export type Scroll = (
  element: HTMLElement,
  target: number,
  duration: number,
  easingFunction: EasingFunction,
  status: Record<string, boolean>
) => void

export type ScrollAuto = (
  element: HTMLElement,
  speed: number,
  status: Record<string, boolean>,
  easeInTime?: number,
) => void

export type CtrlTarget = (
  element: HTMLElement,
  target: number
) => number

export type ScrollDirection = 'prev' | 'next'

export type TouchCtrl = (
  trigger: HTMLElement,
  direction: ScrollDirection,
  onTouchStart: (direction: ScrollDirection) => void,
  onTouchEnd: (direction: ScrollDirection) => void,
) => void

export type ScrollCtrl = (
  container: HTMLElement,
  triggers: {
    prev: HTMLElement,
    next: HTMLElement
  }
) => void
