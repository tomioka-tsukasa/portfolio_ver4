import { S } from "./statics"
import { Init, PushText, Start, Store, Typing } from "./types"

export class TypingAnimation {
  constructor(
    target: HTMLElement | null,
    text: string,
    initDisplay?: boolean
  ) {
    this.init(
      target,
      text,
      initDisplay
    )
  }

  private store: Store = {
    typeList: [],
    randomList: [],
    animationFrameId: 0
  }

  start: Start = (
    target,
    text,
    speed,
    endCallback
  ) => {
    this.init(
      target,
      text,
    )
    this.typing(target, speed, endCallback)
  }

  init: Init = (
    target,
    text,
    initDisplay
  ) => {
    if (!target) return
    target.innerHTML = ''
    cancelAnimationFrame(this.store.animationFrameId)
    this.store.randomList.splice(0)
    this.store.typeList.splice(0)
    S.setNode(target)
    initDisplay && (S.getNode(target, 'typeArea').innerText = text)
    text && (this.store.typeList = text.split(''))
  }

  private typing: Typing = (
    target,
    speed = 2,
    endCallback = () => {}
  ) => {
    const TA = this
    function tick() {
      TA.store.animationFrameId = requestAnimationFrame(tick)
      const pushEnd = TA.pushText(target, speed)
      pushEnd && S.end(
        TA.store.animationFrameId,
        target,
        endCallback 
      )
    }
    tick()
  }

  private pushText: PushText = (
    target,
    speed
  ) => {
    if (this.store.typeList.length === 0) return true
    else {
      const dummyToggle = this.dummy.letter().length
      if (!dummyToggle) {
        this.dummy.create(speed)
        S.getNode(target, 'typeArea').innerText += this.store.typeList[0]
        this.store.typeList.shift()
        return false
      } else {
        S.getNode(target, 'dummyArea').innerText = this.dummy.get()
        this.dummy.letter().shift() 
        return false
      }
    }
  }
  
  private dummy = (() => {
    const TA = this
    return {
      create(length: number) {
        for (let i = 0; i < length; i++) {
          TA.store.randomList.push(S.letter.getRandom())
        }
        return TA.store.randomList
      },
      get: () => TA.store.randomList[S.letter.random(TA.store.randomList.length)],
      letter: () => TA.store.randomList
    }
  })()
}
