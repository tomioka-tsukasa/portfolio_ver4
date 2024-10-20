import { getRandomLetter } from "../randomLetter"
import { TypeAhead } from "./types"

export const typeAhead: TypeAhead = (
  setTarget
) => {
  let target: HTMLElement | null = setTarget
  let list: Array<string> = ['']
  return {
    update() {
      if (!target) return
      list.shift()
      target.innerHTML = [getRandomLetter(), ...list].join('')
    },
    exec(
      setList 
    ) {
      if (!target) return list
      if (list.length < 10) {
        list = setList.filter((l, i) => i < 30),
        this.update()
      } else {
        this.update()
      }
      return list
    },
    reset() {
      if (!target) return
      target.innerHTML = ''
    }
  }
}
