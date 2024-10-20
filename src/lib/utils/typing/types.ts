export type TypingPattern = (
  types: string,
  target: HTMLElement | null,
  store: Store,
  option: Record<string, any>
) => {
  typeFunc: TypeItem['typeFunc']
}

export type Store = {
  stop: boolean,
  status: {
    type?: string,
    interaction?: string,
  }
}

export type Animate = () => void

export type Exec = (
  name: string,
  typeFunc: TypeItem['typeFunc'],
  endFunc?: () => any
) => TypeItem

export type TypeItem = {
  name: string,
  typeFunc: () => boolean,
  working: boolean,
  endFunc?: EndFunc
}

export type EndFunc = () => any

export type AnimationFrameId = number
