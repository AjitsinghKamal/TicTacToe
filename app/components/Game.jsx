import React from 'react';
import ReactDOM from 'react-dom';
import Board from './Board.jsx';


/**
/top most component
/for the entire game
**/
class Game extends React.Component{
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
          <div>{/* status */}</div>
          <ol>{/* TODO */}</ol>
        </div>
      </div>
    );
  }
}

/** Note to self
/ if exported with default
/ can import without {}
/ otherwise import with {componentname}
**/
export default Game;
