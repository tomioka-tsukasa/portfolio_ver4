export type SetNode = (
  target: HTMLElement,
) => void

export type End = (
  animationFrameId: number,
  target: HTMLElement,
  endCallback?: any
) => void

export type Typing = (
  target: HTMLElement,
  speed?: number,
  endCallback?: any
) => void

export type PushText = (
  target: HTMLElement,
  speed: number,
) => boolean

export type Store = {
  typeList: Array<string>,
  randomList: Array<string>,
  animationFrameId: number
}

export type Init = (
  target: HTMLElement | null,
  text: string,
  initDisplay?: boolean
) => void

export type Start = (
  target: HTMLElement,
  text: string,
  speed?: number,
  endCallback?: any
) => void

export type GetNode = (
  target: HTMLElement,
  type: 'typeArea' | 'dummyArea' | 'typeLine'
) => HTMLElement
