import { useState } from "react";
import GameBoard from "./Components/GameBoard";
import PlayerInfo from "./Components/PlayerInfo";
import Log from "./Components/Log";

import GameOver from "./Components/GameOver.jsx";
import { deriveActivePlayer, handleWinner } from "./progres.js";
const initialGameBaord = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
const initialPlayers = {
  'X': 'Player 1',
  'O': 'Player 2'
}


function App() {
  const [players, setPlayers] = useState(initialPlayers)
  const [gameTurns, setGameTurns] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurns);
  
  const gameBoard = structuredClone(initialGameBaord);
  for (const turn of gameTurns) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  let winner = handleWinner(gameBoard,players);
  
  let hasDraw = gameTurns.length === 9 && !winner 
  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurns((prevTurns) => {
      const currentPlayer = deriveActivePlayer(prevTurns);

      const updateTurnes = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updateTurnes;
    });
  }

  function handleRematch() {
    setGameTurns([])
  }
  function handlePlayerNameChange(symbol,newName) {
    setPlayers(prePlayers => {
      return {
        ...prePlayers,
        [symbol] : newName
      }
    })
  }
  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <PlayerInfo
            initialName={players['X']}
            symbol="X"
            isActive={activePlayer === "X"}
            onChangeName={handlePlayerNameChange}
          />
          <PlayerInfo
            initialName={players['O']}
            symbol="O"
            isActive={activePlayer === "O"}
            onChangeName={handlePlayerNameChange}
          />
        </ol>
        {(winner || hasDraw) && <GameOver winner={winner} onRematch={handleRematch} />}
        <GameBoard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurns} />
    </main>
  );
}

export default App;
