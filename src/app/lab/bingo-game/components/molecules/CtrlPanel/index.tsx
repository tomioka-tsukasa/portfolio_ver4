import Button from "../../atoms/Button";
import { generateBingo } from "../../../modules/bingo_generator.js"
import React from "react";

export default function CtrlPanel({
  balls = {},
  ctrl = {}
}) {
  const [disables, setDisables] = React.useState({
    nextBall: true,
    newGame: false
  })
  const getRandomNumber = (range) => {
    return Math.floor(Math.random() * range);
  }
  const newGame = () => {
    setDisables({
      nextBall: false,
      newGame: false 
    });
    disables.nextBall = false;
    generateBingo().then( data => {
      const newData = [];
      data.map( number => {
        newData.push({
          number,
          display: false
        })
      })
      ctrl.setBalls({
        type: 'generate',
        newBalls: newData
      })
    })
  }
  const nextBall = () => {
    const randomNumber = getRandomNumber(75);
    ctrl.setBalls({
      type: 'update',
      selectedBall: randomNumber
    })
  }
  return (
    <div className='COMP_ctrlPanel'>
      <Button id='next-ball' text={'NEXT BALL'} handler={nextBall} disable={disables.nextBall}/>
      <Button id='new-game' text={'NEW GAME'} disable={disables.newGame} handler={newGame} />
    </div>
  )
}
