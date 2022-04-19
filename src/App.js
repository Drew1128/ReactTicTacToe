import './App.css';
import { useState, useEffect } from 'react';
import  Square  from './components/Square';
import { Patterns } from './Patterns';

function App() {
  const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);
  const [player, setPlayer] = useState('X');
  const [winner, setWinner] = useState({winner: 'none', state: "none"});


  useEffect(() => {
    checkWinner();
  }, [board]);

  useEffect(() => {
    if (winner.winner !== 'none') {
      alert(`${winner.winner} is the winner!`);
    }
   }, [winner]);

  const chooseSquare = (square) => {
    setBoard(
      board.map((val, i) => {
      if (i === square && val === '') {
        return player;
      }
      return val;
    })
    );
    setPlayer(player === 'X' ? 'O' : 'X');
  }

  const checkWinner = () => {
    Patterns.forEach((pattern) => {
      const firstPlayer = board[pattern[0]];
      if (firstPlayer === '') return;
      let foundWinningPattern = true;
      pattern.forEach((i) => {
        if (firstPlayer !== board[i]) {
          foundWinningPattern = false;
        }
      })
      if (foundWinningPattern) {
        setWinner({winner: firstPlayer, state: 'win'});
      }
    });
  }

    return (
    <div className="App">
      <div className='board'>
        <div className='row'>
          <Square value={board[0]} chooseSquare={() => {chooseSquare(0)}}/>
          <Square value={board[1]} chooseSquare={() => {chooseSquare(1)}} />
          <Square value={board[2]} chooseSquare={() => {chooseSquare(2)}} />
        </div>
        <div className='row'>
          <Square value={board[3]} chooseSquare={() => {chooseSquare(3)}} />
          <Square value={board[4]} chooseSquare={() => {chooseSquare(4)}} />
          <Square value={board[5]} chooseSquare={() => {chooseSquare(5)}} />
        </div>
        <div className='row'>
          <Square value={board[6]} chooseSquare={() => {chooseSquare(6)}} />
          <Square value={board[7]} chooseSquare={() => {chooseSquare(7)}} />
          <Square value={board[8]} chooseSquare={() => {chooseSquare(8)}} />
        </div>
      </div>
    </div>
  );
}

export default App;
