export type TypeAhead = (
  setTarget: HTMLElement | null,
) => {
  set: (
    setList: Array<string>
  ) => void,
  exec: () => void,
} | undefined
