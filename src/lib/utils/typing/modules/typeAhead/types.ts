export type TypeAhead = (
  setTarget: HTMLElement | null,
) => {
  exec: Exec,
  update: Update,
  reset: Reset
}

export type Exec = (
  setList: Array<string>
) => Array<string>

export type Update = () => void

export type Reset = () => void
