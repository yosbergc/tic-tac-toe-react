import React from "react"
import confetti from 'canvas-confetti'
import {Square} from './components/Square/Square.jsx'
import { Turns } from "./Constants.js";
import { checkWinner, checkIfBoardIsFilled } from "./logic/board.js";
import { Endgame } from "./components/Square/Endgame.jsx";

function App() {
  const [board, setBoard] = React.useState(Array(9).fill(null));
  const [turn, setTurn] = React.useState(Turns.X);
  const [winner, setWinner] = React.useState(null);

  function updateBoard(index, currentPlayer) {
    let boardActual = [...board];
    if (boardActual[index] !== null || winner) return
    let newTurn = turn === Turns.X ? Turns.O : Turns.X;
    boardActual[index] = currentPlayer;
    setBoard(boardActual);
    setTurn(newTurn)
    let ganador = checkWinner(boardActual)
    if (ganador) {
      confetti()
      setWinner(ganador)
    }
    let check = checkIfBoardIsFilled(boardActual)
    if (check) {
      setWinner(false);
    }
  }

  function resetearJuego() {
      let initialBoard = Array(9).fill(null);
      let initialPlayer = Turns.X;
      let initialWinner = null;
      setBoard(initialBoard);
      setTurn(initialPlayer);
      setWinner(initialWinner);
  }
  return (<main className="board">
    <h1>Tic Tac Toe</h1>
    <section className="game">
      {
        board.map((celda, index) => {
          return <Square
                  key={index}
                  index={index}
                  updateBoard={updateBoard}
                  setTurn={setTurn}
                  turn={turn}>
                    {board[index]}
                  </Square>
        })
      }
    </section>
    <section className="turn">
      <Square isSelected={turn === Turns.X}>
        {Turns.X}
      </Square>
      <Square isSelected={turn === Turns.O}>
        {Turns.O}
      </Square>
    </section>
    <Endgame winner={winner} resetearJuego={resetearJuego}/>
  </main>)
}

export default App
