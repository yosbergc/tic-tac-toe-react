import React from "react"
const Square = ({children, isSelected, updateBoard, index, turn}) => {

  return <div className={`square ${isSelected ? 'is-selected' : ''}`} onClick={() => {
    updateBoard(index, turn)
  }}>
    {children}
  </div>
}
const Turns = {
  X: 'x',
  O: 'o'
}
const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [6, 4, 2],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8]
]
function App() {
  const [board, setBoard] = React.useState(Array(9).fill(null));
  const [turn, setTurn] = React.useState(Turns.X);
  const [winner, setWinner] = React.useState(null);
  let checkWinner = (boardToCheck) => {
      for (let combo of WINNER_COMBOS) {
        let [a, b, c] = combo;
        if (boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]) {
            return boardToCheck[a];
          }
      }
    return null;
  }

  function updateBoard(index, currentPlayer) {
    let boardActual = [...board];
    if (boardActual[index] !== null || winner) return
    let newTurn = turn === Turns.X ? Turns.O : Turns.X;
    boardActual[index] = currentPlayer;
    setBoard(boardActual);
    setTurn(newTurn)
    let ganador = checkWinner(boardActual)
    if (ganador) {
      setWinner(ganador)
    }
    if (boardActual.every(celda => celda !== null)) {
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
    {winner !== null && (<section className="winner">
      <div className="text">
        <h2>
          {winner === false ? 'Empate!' : `Ganó:`}
        </h2>
          {winner && <header className="win">
            <Square>{winner}</Square>
            </header>}
        <footer>
          <button onClick={resetearJuego}>Empezar de nuevo</button>
        </footer>
      </div>
    </section>)}
  </main>)
}

export default App
