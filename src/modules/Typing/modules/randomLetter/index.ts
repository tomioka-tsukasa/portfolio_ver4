const uppLetter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lowLetter = 'abcdefghijklmnopqrstuvwxyz'
const numberLetter = '0123456789'
const pattern = uppLetter + lowLetter + numberLetter

const random = (
  length: number
) => Math.floor(Math.random() * length)

export const getRandomLetter= () => pattern.split('')[random(pattern.split('').length)]
