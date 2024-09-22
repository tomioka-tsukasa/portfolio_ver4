type SetHover = (
  cursors?: string,
  triggers?: string,
) => void

export const setHover: SetHover = (
  cursors,
  triggers = 'a',
) => {
  console.log(cursors)
  const triggerNodes = document.querySelectorAll(triggers) as NodeListOf<HTMLElement>
  const cursorNodes = cursors && document.querySelectorAll(cursors) as NodeListOf<HTMLElement>
  triggerNodes.forEach( node => {
    const enterHandler = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      target.dataset.modCursorIshover = 'active'
      cursorNodes && (cursorNodes.forEach( cursor => {
        cursor.dataset.modCursorIshover = 'active'
      }))
    }
    const leaveHandler = (event: MouseEvent) => {
      const target = event.target as HTMLElement
      target.dataset.modCursorIshover = 'unactive'
      cursorNodes && (cursorNodes.forEach( cursor => {
        cursor.dataset.modCursorIshover = 'unactive'
      }))
    }
    node.addEventListener('mouseenter', enterHandler)
    node.addEventListener('mouseleave', leaveHandler)
  })
}
