import React from 'react';

class GameInfo extends React.Component{

  render(){
    const moves=this.props.gameMove.map((step,move)=>{
      const desc = move ?
        'Move #' + move :
        'Game start';
      return (
        <li key={move}>
          <i className="fa fa-caret-right"></i><a href="#" onClick={()=>this.props.jumper(move)}>{desc}</a>
        </li>
      );
    })
    return(
      <div>
        <ul>{moves}</ul>
      </div>

    );

  }
}

export default GameInfo;
