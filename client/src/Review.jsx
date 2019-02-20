import React from 'react';
import axios from 'axios';
import Rating from './Rating.jsx';
import SearchBar from './SearchBar.jsx';
import Comment from './Comment.jsx';
import PageNumber from './PageNumber.jsx';
import { AppContainer, Top } from '../reviewStyles.jsx';


class Review extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  componentDidMount() {
    this.getReviews(1);
  }

  parseRatings(data) {
    for(let review of data) {
      review.ratings = JSON.parse(review.ratings);
    }
  }

  getReviews(offeringId) {
    return axios.get(`http://localhost:3002/${offeringId}`)
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
      averageRating = averageRating / Object.keys(review.ratings).length;
      averageRatings.push(averageRating);
    }

    let totalRating = averageRatings.reduce((total, current) => {
      return total + current;
    }, 0) / this.state.reviews.length;

    return totalRating;
  }

  computeSubRatings() {
    let subRatings = {};
    for(let review of this.state.reviews) {
      for(let rating in review.ratings) {
        if(subRatings[rating] === undefined) {
          subRatings[rating] = 0;
        }
        subRatings[rating] += review.ratings[rating];
      }
    }
    for(let rating in subRatings) {
      subRatings[rating] = subRatings[rating] / this.state.reviews.length;
    }
    return subRatings;
  }

  handleSearchChange(event) {
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleSearchCancel() {
    this.setState({
      searchTerm: ''
    })
  }

  render() {
    let totalRating = this.computeTotalRating();
    let subRatings = this.computeSubRatings();
    return (
      <AppContainer>
        <Top>
          <Rating isTotal={true} numOfReviews = {this.state.reviews.length} 
          total={isNaN(totalRating) ? 0 : totalRating}/>
          <SearchBar searchTerm={this.state.searchTerm} 
          onChange={this.handleSearchChange.bind(this)} onClick={this.handleSearchCancel.bind(this)}/>
        </Top>
        <Rating subRatings={subRatings}/>
        <Comment reviews={this.state.reviews}/>
        <PageNumber />
      </AppContainer>
    )
  }
}

export default Review;