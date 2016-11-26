import React from 'react';
import ReactDOM from 'react-dom';
import Board from './Board.jsx';
import GameInfo from './GameInfo.jsx';
import PlayerTurn from './PlayerTurn.jsx';
//import Header from './Header.jsx';
/**
/top most component
/for the entire game
**/
const initial={
  history:[{
    squares:Array(9).fill(null)
  }],
  xIsNext:true,
  stepNumber:0
};

class Game extends React.Component{


  constructor(){
    super();
    this.state=initial;
  }

  _handleClick(i) {
    const history = this.state.history;
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (this._checkWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      history: history.concat([{
        squares: squares
      }]),
      xIsNext: !this.state.xIsNext,
      stepNumber: history.length,
    });
  }

  _jumpTo(step){
    this.setState({
      stepNumber: step,
      xIsNext: (step % 2)? false: true,
    })
  }

  _reStart(){
    this.setState(initial);
  }

  _checkWinner(squares){
      const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
      let w=null;
      lines.some(line => {
        let lineS=line.map(l => squares[l]);
        if(lineS.every((v,i,a)=> i===0||v===a[i-1])){
          w=lineS[0];
          return true;
        }
      });

    return w;
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = this._checkWinner(current.squares);

    let status;
    if (winner) {
      status = winner+" wins";
    } else {
      status =this.state.xIsNext ? 'X' : 'O';
    }


    return (


      <div className="game">

        <div className="player-turn">
          <PlayerTurn
            player={status}
            replay={()=>this._reStart()}
          />
        </div>

        <div className="game-board">
          <Board
            squares={current.squares}
            onClick={i=>this._handleClick(i)}
          />
        </div>

        <div className="game-info">
          <GameInfo
            gameMove={history}
            jumper={i=>this._jumpTo(i)}
          />
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
