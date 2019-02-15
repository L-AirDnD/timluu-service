import React from 'react';
import axios from 'axios';
import Rating from './Rating.jsx';
import Comment from './Comment.jsx';
import PageNumber from './PageNumber.jsx';
import { AppContainer } from '../appStyles.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: []
    }
  }

  componentDidMount() {
    this.getReviews(3);
  }

  parseRatings(data) {
    for(let review of data) {
      review.ratings = JSON.parse(review.ratings);
    }
  }

  getReviews(offeringId) {
    axios.get(`/${offeringId}`)
      .then((response) => {
        this.parseRatings(response.data);
        this.setState({
          reviews: response.data
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  computeTotalRating() {
    let averageRatings = [];

    for(let review of this.state.reviews) {
      let averageRating = 0;
      for(let rating in review.ratings) {
        rating = review.ratings[rating];
        averageRating += rating;
      }
      averageRating = averageRating / 6.0;
      averageRatings.push(averageRating);
    }

    let totalRating = averageRatings.reduce((total, current) => {
      return total + current;
    }, 0) / this.state.reviews.length;

    return totalRating;
  }

  computeSubRatings() {
    let subRatings = {
      accuracy: 0,
      communication: 0,
      cleanliness: 0,
      location: 0,
      checkin: 0,
      value: 0
    };
    for(let review of this.state.reviews) {
      for(let rating in review.ratings) {
        subRatings[rating] += review.ratings[rating];
      }
    }
    for(let rating in subRatings) {
      subRatings[rating] = subRatings[rating] / this.state.reviews.length;
    }
    return subRatings;
  }

  render() {
    let totalRating = this.computeTotalRating();
    let subRatings = this.computeSubRatings();
    return (
      <AppContainer>
        <Rating isTotal={true} numOfReviews = {this.state.reviews.length} 
        total={isNaN(totalRating) ? 0 : totalRating}/>
        <Rating subRatings={subRatings}/>
        <Comment reviews={this.state.reviews}/>
        <PageNumber />
      </AppContainer>
    )
  }
}

export default App;