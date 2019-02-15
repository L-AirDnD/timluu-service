import React from 'react';
import axios from 'axios';
import Rating from './Rating.jsx';
import SearchBar from './SearchBar.jsx';
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

  render() {
    let totalRating = this.computeTotalRating();
    return (
      <AppContainer>
        <Rating isTotal={true} numOfReviews = {this.state.reviews.length} 
        total={isNaN(totalRating) ? 0 : totalRating}/>
        <SearchBar />
        <Rating />
        <Comment reviews={this.state.reviews}/>
        <PageNumber />
      </AppContainer>
    )
  }
}

export default App;