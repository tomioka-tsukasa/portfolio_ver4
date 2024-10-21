import { getRandomLetter } from "../randomLetter"
import { TypeAheadInit } from "./types"

export const typeAheadInit: TypeAheadInit = (
  setTarget
) => {
  let target: HTMLElement | null = setTarget
  let list: Array<string> = ['']
  return {
    update() {
      if (!target) return
      list.shift()
      target.innerHTML = [`<span style="display: inline-block; width: 1em;">${getRandomLetter()}</span>`, ...list].join('')
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
