import { TypeAhead } from "./types"

let list: Array<string> = ['']
let target: HTMLElement | null = null

export const typeAhead: TypeAhead = (
  setTarget,
) => {
  target = setTarget
  return {
    set(
      setList
    ) {
      list = setList
    },
    exec() {
      if (
        list.length
        && target
      ) {
        target.innerHTML = list.join('')
      }
    }
  }
}
