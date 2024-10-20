export type SetTypes = (
  setters: Array<SetType>
) => void

export type SetType = {
  type: string,
  target: HTMLElement | null
}

export type Animate = () => void

export type Store = {
  stop: boolean,
  status: {
    type: string
  }
}

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
