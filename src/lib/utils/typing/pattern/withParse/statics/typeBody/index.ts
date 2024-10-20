import { TypeBody } from "./types"

let type: string = ''

export const typeBody: TypeBody = (
  list,
  target,
  timestamp = 20,
) => {
  if (!target) return list
  if (list.length) {
    type += list[0]
    target.innerHTML = type
    list.shift()
    return list
  } else {
    return list
  }
}
