const setCursorStatus = (
  statusName: string,
  cursors: string,
) => {
  if (cursors) {
    const cursorNodes = document.querySelectorAll(cursors) as NodeListOf<HTMLElement>
    cursorNodes && (cursorNodes.forEach( cursor => {
      cursor.dataset.modCursorIshover = statusName
    }))
  }
}

const enterHandler = (
  statusName: string,
  target: HTMLElement,
  cursors?: string,
) => {
  const handler = (event: MouseEvent) => {
    const target = event.target as HTMLElement
    target.dataset.modCursorIshover = statusName
    if (cursors) setCursorStatus(
      statusName,
      cursors,
    )
  }
  target.addEventListener('mouseenter', handler)
}

const leaveHandler = (
  statusName: string,
  target: HTMLElement,
  cursors?: string,
) => {
  const handler = (event: MouseEvent) => {
    const target = event.target as HTMLElement
    target.dataset.modCursorIshover = statusName
    if (cursors) setCursorStatus(
      statusName,
      cursors,
    )
  }
  target.addEventListener('mouseleave', handler) 
}

const setHover = (
  cursors?: string,
  triggers: string = 'a',
) => {
  console.log(cursors)
  const triggerNodes = document.querySelectorAll(triggers) as NodeListOf<HTMLElement>
  triggerNodes.forEach( node => {
    enterHandler(
      'active',
      node,
      cursors
    )
    leaveHandler(
      'unactive',
      node,
      cursors
    )
  })
}

export { setHover }
