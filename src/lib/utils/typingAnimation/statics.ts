import { End, GetNode, SetNode } from "./types"

export class S {
  static setNode: SetNode = (
    target
  ) => {
    const typeArea = document.createElement('span')
    typeArea.classList.add('typeArea')
    target.appendChild(typeArea)
    const dummyArea = document.createElement('span')
    dummyArea.classList.add('dummyArea')
    target.appendChild(dummyArea)
    const line = document.createElement('span')
    line.classList.add('typeLine')
    target.appendChild(line)
  }

  static getNode: GetNode = (
    target,
    type
  ) => {
    const node = target.querySelector<HTMLSpanElement>(`.${type}`)
    const dummy = document.createElement<'div'>('div')
    if (node) return node
    else {
      console.warn('getNodeメソッドで対象のノードを取得できませんでした。')
      return dummy
    }
  }
  
  static letter = (function () {
    const uppLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lowLetter = 'abcdefghijklmnopqrstuvwxyz'
    const numberLetter = '0123456789'
    const pattern = uppLetter + lowLetter + numberLetter
    const random = (length: number) => Math.floor(Math.random() * length)
  
    return {
      get() {
        return pattern
      },
      getRandom() {
        return pattern.split('')[random(pattern.split('').length)]
      },
      random
    }
  })()
  
  static end: End = (
    animationFrameId,
    target,
    endCallback
  ) => {
    S.getNode(target, 'dummyArea').innerText = ''
    S.getNode(target, 'typeLine').innerText = ''
    cancelAnimationFrame(animationFrameId)
    endCallback()
  }
}
