import React from 'react';
/**
/ This is the lowest level component
/ render a single Square
**/
class Square extends React.Component{
  render(){
    return (
      <button className="square">
        { this.props.value }
      </button>
    );
  }
}

export default Square;
