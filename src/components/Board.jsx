import { useState } from "react"
import Square from "./Square"

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = useState(true);

  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ]

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      } 
    }
    return false;
  }

  const isWinner = checkWinner();

  const clickHandler = (index) => {
    if(state[index] !== null){
      return;
    }
    const copyState = [...state];
    copyState[index] = isXTurn ? "X" : "0";
    setState(copyState);
    setIsXTurn(!isXTurn);
  }

  console.log("State", state);

  return (
    <div className="flex flex-row justify-center items-center min-h-screen bg-zinc-800 font-semibold lg:text-3xl">
      
      {isWinner ? (
        <>
          {isWinner} has won
          <button className="border rounded-md ml-4 bg-zinc-900 text-white border-slate-50 p-2" onClick={() => setState(Array(9).fill(null))}>Play Again</button>
        </>
      ) : (
        <>
          <h1 className="lg:text-3xl text-xl mr-4">Turn: {isXTurn ? "X" : "0"}</h1>
          <div className="board-row">
            <Square onClick={() => clickHandler(0)} value={state[0]} />
            <Square onClick={() => clickHandler(1)} value={state[1]} />
            <Square onClick={() => clickHandler(2)} value={state[2]} />
          </div>
          <div className="board-row">
            <Square onClick={() => clickHandler(3)} value={state[3]} />
            <Square onClick={() => clickHandler(4)} value={state[4]} />
            <Square onClick={() => clickHandler(5)} value={state[5]} />
          </div>
          <div className="board-row">
            <Square onClick={() => clickHandler(6)} value={state[6]} />
            <Square onClick={() => clickHandler(7)} value={state[7]} />
            <Square onClick={() => clickHandler(8)} value={state[8]} />
          </div>
        </>
      )}
    </div>
  )
}

export default Board