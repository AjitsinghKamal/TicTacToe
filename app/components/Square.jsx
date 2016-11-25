import React from 'react';
/**
/ This is the lowest level component
/ render a single Square
**/
class Square extends React.Component{
  constructor(){
    super();
    this.state={
      value:null
    };
  }
  render(){
    return (
      <button className="square" onClick={()=>this.props.onClick()}>
        {this.state.value}
      </button>
    );
  }
}

export default Square;
