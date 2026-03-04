import {WINNING_COMBINATIONS} from './winning-combinations.js'
export function deriveActivePlayer(gameTurns) {
    let currentPlayer = "X";
    if (gameTurns.length > 0 && gameTurns[0].player === "X") {
      currentPlayer = "O";
    }
    return currentPlayer;
}
  


export function handleWinner(gameBoard, players) {
  let winner = undefined;
    for (const combinator of WINNING_COMBINATIONS) {
        const firstSquareSumbol = gameBoard[combinator[0].row][combinator[0].column]
        const secondSquareSumbol = gameBoard[combinator[1].row][combinator[1].column]
        const thirdSquareSumbol = gameBoard[combinator[2].row][combinator[2].column]
        if (firstSquareSumbol && firstSquareSumbol === secondSquareSumbol && firstSquareSumbol === thirdSquareSumbol) {
          winner = players[firstSquareSumbol]
        }
      }
    return winner
}