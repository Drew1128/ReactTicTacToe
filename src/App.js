import './App.css';
import { useState } from 'react';
import  Square  from './components/Square';

function App() {
  const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);

  return (
    <div className="App">
      <div className='board'>
        <div className='row'>
          <Square value={board[0]} chooseSquare={() => {alert(1)}}/>
          <Square value={board[1]} chooseSquare={() => {alert(2)}} />
          <Square value={board[2]} chooseSquare={() => {alert(3)}} />
        </div>
        <div className='row'>
          <Square value={board[3]} chooseSquare={() => {alert(4)}} />
          <Square value={board[4]} chooseSquare={() => {alert(5)}} />
          <Square value={board[5]} chooseSquare={() => {alert(6)}} />
        </div>
        <div className='row'>
          <Square value={board[6]} chooseSquare={() => {alert(7)}} />
          <Square value={board[7]} chooseSquare={() => {alert(8)}} />
          <Square value={board[8]} chooseSquare={() => {alert(9)}} />
        </div>
      </div>
    </div>
  );
}

export default App;
