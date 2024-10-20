import { Basic } from "./types"

export const basic: Basic = (
  types,
  target,
) => {
  const typeList: Array<string> = types.split('')
  let type: string = ''
  const typeFunc = () => {
    if (!target) return false
    if (typeList.length) {
      type += typeList[0]
      target.innerHTML = type
      typeList.shift()
      return true
    } else {
      return false
    }
  }

  return {
    typeFunc
  }
}
