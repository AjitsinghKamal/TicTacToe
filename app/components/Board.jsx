import React from 'react';
import Square from './Square.jsx';

/**
/ This component will use child squares
/ and build a complete Board
**/
class Board extends React.Component{

  // bring up child component
  _renderSquare(i){
    return <Square value={i}/>;
  }
  render(){
    const status='Next Player: X';
    /**
    // Note to self:
    // a react component must return *single element
    // that's the reason for enclosing div
    **/
    return(
      <div>
        <div className="status">{status}</div>

        <div className="board-row">
          {this._renderSquare(0)}
          {this._renderSquare(1)}
          {this._renderSquare(2)}
        </div>

        <div className="board-row">
          {this._renderSquare(0)}
          {this._renderSquare(1)}
          {this._renderSquare(2)}
        </div>

        <div className="board-row">
          {this._renderSquare(0)}
          {this._renderSquare(1)}
          {this._renderSquare(2)}
        </div>

      </div>
    )
  }
}

export default Board;
