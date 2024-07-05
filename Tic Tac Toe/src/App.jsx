import { useState } from "react";
import './App.css';

const initialboard =()=>Array(9).fill(null)
function App() {

  const [board, setBoard] = useState(initialboard())
  console.log('board');
  return (
    <div className='game'>
      <div className="status">
        player X Turn
        <button>Reset Game</button>
      </div>

      <div className="board">
        {board.map((_, index)=>{
          return <button className='cell' key={index}>X</button>
        })}
      </div>
    </div>
  )
}
export default App;

