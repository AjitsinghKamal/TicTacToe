import React from 'react'

function PlayerTurn(props){
  let sub;
  if(props.player!=="X wins"&&props.player!=="O wins"){
    sub=<span>your move</span>
  }
  else{
    sub=<span><i className="fa fa-refresh" onClick={()=>props.replay()}></i></span>
  }
  return(
    <div>
      <span className="turn">{props.player}</span>
      <br/>
      {sub}
    </div>
  );
}

export default PlayerTurn;
