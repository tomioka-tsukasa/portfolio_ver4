import BallPanel from "../../atoms/BallPanel"

export default function ScreenTable({
  panels = ['0']
}) {
  const labels = [
    'B',
    'I',
    'N',
    'G',
    'O'
  ]
  return (
    <div className='COMP_screenTable'>
      <div className='labels'>
        {labels.map( label => <div className='label' key={`label-${label}`}>
          {label}
        </div>)}
      </div>
      <div className='panels'>
        {panels.map( panel => {
          console.log(panel)
          return <div className='panel' key={`ball-panel-${panel.number}`}>
            <BallPanel number={panel.number} display={panel.display} />
          </div>
        })}
      </div>
    </div>
  )
}
