import CurrentBall from "../../atoms/CurrentBall";
import CtrlPanel from "../../molecules/CtrlPanel";
import ScreenTable from "../../molecules/ScreenTable";

export default function Screen({
  balls = {},
  ctrl = {}
}) {
  return (
    <div className='COMP_screen'>
      <div className='head'>
        <CurrentBall />
        <CtrlPanel ctrl={ctrl} balls={balls} />
      </div>
      <div className='table'>
        <ScreenTable panels={balls.init} />
      </div>
    </div>
  )
}
