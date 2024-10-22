export type Doms = {
  container: HTMLElement | null,
  content: HTMLElement | null,
  item: HTMLElement | null
}

export type Exec = (
  doms: Doms,
  ctrl: Ctrl | undefined
) => void

export type Ctrl = {
  speed?: number,
  stop?: boolean
}

export type Store = {
  progress: number,
  gap?: number
}

export type Option = {
  gap?: number
}
