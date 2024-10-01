export default function Button({
  id = '',
  text = '',
  disable = true,
  handler = () => {}
}) {
  return (
    <button id={id} disabled={disable ? 'disabled' : ''} onClick={handler}>
      {text}
    </button>
  )
}
