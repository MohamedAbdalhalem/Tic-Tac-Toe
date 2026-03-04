

function Log({turns}) {
    
  return (  
    <ol id="log">
          {turns.map(trun => <li key={`${trun.square.row}${trun.square.col}`}>
          {trun.player} selected {trun.square.row} , {trun.square.col}
      </li>)}
    </ol>
  )
}



export default Log
  
