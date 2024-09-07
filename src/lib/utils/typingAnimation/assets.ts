const setNode: (
  target: HTMLElement,
) => void = (
  target
) => {
  target.innerText = ''
  const typeArea = document.createElement('span')
  typeArea.classList.add('typeArea')
  target.appendChild(typeArea)
  const dummyArea = document.createElement('span')
  dummyArea.classList.add('dummyArea')
  target.appendChild(dummyArea)
  const line = document.createElement('span')
  line.classList.add('typeLine')
  line.innerText = '｜'
  target.appendChild(line)
}

const dummy = (function() {
  const uppLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const lowLetter = 'abcdefghijklmnopqrstuvwxyz'
  const numberLetter = '0123456789'
  const letter = uppLetter + lowLetter + numberLetter
  let letters: Array<string> = []
  const random = (length: number) => {
    return Math.floor(Math.random() * length)
  }
  return {
    create(length: number) {
      for (let i = 0; i < length; i++) {
        letters.push(letter.split('')[random(letter.split('').length)])
      }
      return letters
    },
    get() {
      return letters[random(letters.length)]
    },
    letter() {
      return letters
    }
  }
})()

const pushText: (
  target: HTMLElement,
  textList: Array<string>,
  speed: number
) => boolean = (
  target,
  array,
  speed
) => {
  if (array.length === 0) {
    return true
  } else {
    const typeArea: HTMLElement | null = target.querySelector('.typeArea')
    const dummyArea: HTMLElement | null = target.querySelector('.dummyArea')
    if (!typeArea || !dummyArea) return false
    if (!dummy.letter().length) {
      dummy.create(speed)
      typeArea.innerText += array[0]
      array.shift()
      return false
    } else {
      dummyArea.innerText = dummy.get()
      dummy.letter().shift() 
      return false
    }
  }
}

const typing: (
  target: HTMLElement,
  textList: Array<string>,
  speed?: number,
  endCallback?: any
) => void = (
  target,
  array,
  speed = 2,
  endCallback = () => {}
) => {
  function tick() {
    const animationFrameId = requestAnimationFrame(tick)
    const pushEnd = pushText(target, array, speed)
    if (pushEnd) {
      const dummyArea: HTMLElement | null = target.querySelector('.dummyArea') 
      const typeLine: HTMLElement | null = target.querySelector('.typeLine')
      if (!typeLine || !dummyArea) return
      dummyArea.innerText = ''
      typeLine.innerText = ''
      cancelAnimationFrame(animationFrameId)
      endCallback()
    }
  }
  tick()
}

export { typing, setNode }
