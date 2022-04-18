import React from 'react'
import "../App.css";

const Square = ({value, chooseSquare}) => {
  return (
    <div className='square' onClick={chooseSquare}>
       
    </div>
  )
}

export default Square