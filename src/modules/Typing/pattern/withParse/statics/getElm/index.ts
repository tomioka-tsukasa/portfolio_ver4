import { GetElm, SetKeyframes } from "./types"

export const getBodyElm: GetElm = (
  id
) => {
  const elm = document.createElement('span')
  elm.dataset.typingId = id
  return elm
}

export const getAheadElm: GetElm = (
  id
) => {
  const elm = document.createElement('span')
  const styles: Partial<CSSStyleDeclaration> = {
    opacity: '.3',
  }
  Object.assign(elm.style, styles)
  elm.dataset.typingId = id
  return elm
}

export const getCursorElm: GetElm = (
  id
) => {
  const wrap = document.createElement('span')
  const body = document.createElement('span')
  const wrapS: Partial<CSSStyleDeclaration> = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '1em',
    height: '1em',
    position: 'relative',
  }
  const bodyS: Partial<CSSStyleDeclaration> = {
    display: 'inline-block',
    backgroundColor: '#000000',
    width: 'calc(1em / 7)',
    height: '1.4em',
    position: 'absolute',
    top: '60%',
    left: '30%',
    transform: 'translate(-50%, -50%)',
    animation: 'blinking 1.6s infinite linear',
  }
  setKeyframes(`
    @keyframes blinking {
      0% {
        opacity: 0;
      }
      29% {
        opacity: 0;
      }
      30% {
        opacity: 1;
      }
      100% {
        opacity: 1;
      }
    }
  `)
  Object.assign(wrap.style, wrapS)
  Object.assign(body.style, bodyS)
  wrap.appendChild(body)
  wrap.dataset.typingId = id
  return wrap
}

export const setKeyframes: SetKeyframes = (
  keyframes
) => {
  if (!document) return
  const style = document.createElement('style');
  document.head.appendChild(style);
  style.sheet?.insertRule(keyframes, style.sheet.cssRules.length);
  return style
}
