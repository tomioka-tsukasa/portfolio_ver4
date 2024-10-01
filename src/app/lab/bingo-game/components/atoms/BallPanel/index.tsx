export default function BallPanel({
  number = '1',
  display = true
}) {
  return (
    <div id={`ball-${number}`} className={`${'COMP_ballPanel'} ${display ? 'isActive' : ''}`}>
      <span className={`${'number'} ${display ? 'isActive' : ''}`}>
        {number}
      </span>
    </div>
  )
}
