import React from 'react';
import SearchBar from './SearchBar.jsx';
import { 
  Top, 
  TopLeft,
  NumOfReviews,
  Stars,
  GreenStar, 
  GreenStarHalf, 
  GreenStarBorder,
  SubRatings,
  RatingsColumn,
  RatingField,
  RatingName,
  RatingStars
} from '../ratingStyles.jsx';

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
    return stars.map((num) => {
      if(num === 1) {
        return (<GreenStar size="20"/>);
      } else if(num === 0) {
        return (<GreenStarBorder size="20"/>);
      } else {
        return (<GreenStarHalf size="20"/>);
      }
    });
  }

  render() {
    if(this.props.isTotal === true) {
      return ( 
        <Top>
          <TopLeft>
            <NumOfReviews>
              {this.props.numOfReviews} Reviews
            </NumOfReviews>
            <Stars>
              {this.convertNumToStars(this.props.total)}
            </Stars>
          </TopLeft>
          <SearchBar />
        </Top>
      )
    } else{
      return (
        <SubRatings>
          <RatingsColumn>
            <RatingField>
              <RatingName>Accuracy</RatingName>
              <RatingStars>{this.convertNumToStars(this.props.subRatings.accuracy)}</RatingStars>
            </RatingField>
            <RatingField>
              <RatingName>Communication</RatingName>
              <RatingStars>{this.convertNumToStars(this.props.subRatings.communication)}</RatingStars>
            </RatingField>
            <RatingField>
              <RatingName>Cleanliness</RatingName>
              <RatingStars>{this.convertNumToStars(this.props.subRatings.cleanliness)}</RatingStars>
            </RatingField>
          </RatingsColumn>
          <RatingsColumn>
            <RatingField>
              <RatingName>Location</RatingName>
              <RatingStars>{this.convertNumToStars(this.props.subRatings.location)}</RatingStars>
            </RatingField>
            <RatingField>
              <RatingName>Check-In</RatingName>
              <RatingStars>{this.convertNumToStars(this.props.subRatings.checkin)}</RatingStars>
            </RatingField>
            <RatingField>
              <RatingName>Value</RatingName>
              <RatingStars>{this.convertNumToStars(this.props.subRatings.value)}</RatingStars>
            </RatingField>
          </RatingsColumn>
        </SubRatings>
      )
    }
  }
}

export default Rating;