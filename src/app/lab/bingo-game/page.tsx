'use client'

import "./_index.css"
import React from "react"
import Screen from "./components/organisms/Screen"

function RootApp() {
  const reducers = {
    setBalls(balls, action) {
      switch (action.type) {
        case 'generate':
          return {
            init: action.newBalls,
            selected: [],
          };
        case 'update':
          const selectedBall = action.selectedBall;
          const updatedBalls = {
            ...balls,
            init: balls.init.map((ball, index) =>
              index === selectedBall ? { ...ball, display: true } : ball
            ),
            selected: [...balls.selected, selectedBall]
          };
          console.log(selectedBall, updatedBalls.init[selectedBall], updatedBalls.selected);
          return updatedBalls;
        default:
          return balls;
      }
    }
  };
  const [balls, setBalls] = React.useReducer(reducers.setBalls, {
    init: [],
    current: []
  });
  return (
    <main className="COMP_rootApp">
      <Screen balls={balls} ctrl={{
        setBalls
      }} />
    </main>
  )
}

export default function Pay() {
  return (
    <RootApp />
  )
}
