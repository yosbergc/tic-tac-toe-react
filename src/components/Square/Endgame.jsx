import { Square } from "./Square"
function Endgame({winner, resetearJuego}) {
    return (<>
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
  </>)
}

export {Endgame}