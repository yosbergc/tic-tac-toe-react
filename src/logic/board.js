import { WINNER_COMBOS } from "../Constants";
export const checkWinner = (boardToCheck) => {
    for (let combo of WINNER_COMBOS) {
      let [a, b, c] = combo;
      if (boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[a] === boardToCheck[c]) {
          return boardToCheck[a];
        }
    }
  return null;
}
export function checkIfBoardIsFilled(currentBoard) {
    if (currentBoard.every(e => e !== null)) {
      return true;
    }
}