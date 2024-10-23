import { CircleText } from "./types"

export const circleText: CircleText = (
  container,
  char, 
  option
) => {
  if (!container) return null

  container.innerHTML = ''

  const radius = option?.radius ?? 125
  const fontSpace = option?.fontSpace ?? 0.7

  const total = char.length
  const circumference = 2 * Math.PI * radius
  const charSpace = circumference / total
  const fontSize = Math.min(charSpace * fontSpace)
  const angleStep = 360 / total

  char.split('').forEach((c, index) => {
    const span = document.createElement('span')
    span.textContent = c
    span.style.transform = `rotate(${(angleStep * index) - 90}deg) translate(${radius + (fontSize / 2)}px) rotate(90deg)`
    span.style.fontSize = `${fontSize}px`
    container.appendChild(span)
  })

  container.style.width = `${radius * 2}px`
  container.style.height = `${radius * 2}px`

  if (option?.background) {
    container.style.borderWidth = `${fontSize}px`
    container.style.borderColor = (option.backgroundColor ?? '#000000')
    container.style.borderStyle = (option.backgroundStyle ?? 'solid')
  }

  return container
}
