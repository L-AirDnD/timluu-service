import React from 'react';
import ReactDOM from 'react';

class Rating extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if(this.props.total === true) {
      return ( 
        <div>
          Total Ratings Here.
        </div>
      )
    } else{
      return (
        <div>
          Insert Ratings here.
        </div>
      )
    }
  }
}

export default Rating;