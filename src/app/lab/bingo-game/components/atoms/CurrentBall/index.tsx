export default function CurrentBall({
  current = '0',
  disable = true
}) {
  return (
    <div id='current-ball'>
      {disable ? '' : current}
    </div>
  )
}
