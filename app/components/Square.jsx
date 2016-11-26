import React from 'react';
/**
/ This is the lowest level component
/ render a single Square
**/
function Square(props){
    return (
      <button className="square font" onClick={()=>props.onClick()}>
        {props.value}
      </button>
    );

}

export default Square;
