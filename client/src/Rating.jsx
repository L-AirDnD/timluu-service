import React from 'react';
import { Top, NumOfReviews, GreenStar, GreenStarHalf, GreenStarBorder } from '../ratingStyles.jsx';

class Rating extends React.Component {
  constructor(props) {
    super(props);
  }

  convertNumToStars(num) {
    let stars = Array(5).fill(0);
    let wholeNum = Math.trunc(num);
    stars.fill(1, 0, wholeNum);
    let decimal = num - wholeNum;
    if(decimal >= 0.75) {
      stars[wholeNum] = 1;
    } else if(decimal >= 0.25) {
      stars[wholeNum] = 0.5
    }
    return stars;
  }

  render() {
    if(this.props.isTotal === true) {
      let stars = this.convertNumToStars(this.props.total);
      return ( 
        <Top>
          <NumOfReviews>
            {this.props.numOfReviews} Reviews
          </NumOfReviews>
          {stars.map((num) => {
            if(num === 1) {
              return (<GreenStar size="20"/>);
            } else if(num === 0) {
              return (<GreenStarBorder size="20"/>);
            } else {
              return (<GreenStarHalf size="20"/>);
            }
          })}
        </Top>
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