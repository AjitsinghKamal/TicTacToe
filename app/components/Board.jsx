import React from 'react';
import Square from './Square.jsx';

/**
/ This component will use child squares
/ and build a complete Board
**/
class Board extends React.Component{

  constructor(){
    super();
    this.state={
      squares:Array(9).fill(null)
    };
  }

  // bring up child component
  _renderSquare(i){
    return <Square value={this.state.squares[i]} onClick={()=>this._handleClick(i)}/>;
  }

  _handleClick(i){
    //keep immutability
    const squares=this.state.squares.slice();
    squares[i]='X';
    this.setState({squares:squares});
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
