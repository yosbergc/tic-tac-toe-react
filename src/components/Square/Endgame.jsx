import { Square } from "./Square"
function Endgame({winner, resetearJuego}) {
  if (winner === null) return null
  let winnerText = winner === false ? 'Empate!' : 'Ganó';
    return (
    <section className="winner">
      <div className="text">
        <h2>{winnerText}</h2>
        {winner && <header className="win">
          <Square>{winner}</Square>
          </header>}
      <footer>
        <button onClick={resetearJuego}>Empezar de nuevo</button>
      </footer>
    </div>
  </section>)
}

export {Endgame}