import { getRandomLetter } from "../randomLetter"
import { Exec, Reset, Update } from "./types"

let list: Array<string> = ['']
let target: HTMLElement | null = null
let timestamp: number = 0

export class TypeAhead {
  constructor (
    setTarget: HTMLElement | null,
  ) {
    target = setTarget
  }

  update: Update = () => {
    if (!target) return
    list.shift()
    target.innerHTML = [getRandomLetter(), ...list].join('')
  }

  exec: Exec = (
    setList 
  ) => {
    if (!target) return list
    if (list.length < 10) {
      list = setList.filter((l, i) => i < 30),
      this.update()
    } else {
      this.update()
    }
    return list
  }

  reset: Reset = () => {
    if (!target) return
    target.innerHTML = ''
  }
}
