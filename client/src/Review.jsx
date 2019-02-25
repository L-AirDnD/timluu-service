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
      pages: [[]],
      currentPage: 0,
      searchTerm: ''
    }
  }

  componentDidMount() {
    this.getReviews(window.location.pathname);
  }

  componentDidUpdate(prevProps, prevState) {
    if(this.state.reviews !== prevState.reviews) {
      this.setState({
        reviews: this.state.reviews,
        pages: this.state.pages
      })
    }
  }

  parseRatings(data) {
    for(let review of data) {
      review.ratings = JSON.parse(review.ratings);
    }
  }

  getReviews(offeringId) {
    let host = 'lairdndreviews.us-east-1.elasticbeanstalk.com';
    return axios.get(`http://${host}/api${offeringId}`)
      .then((response) => {
        this.parseRatings(response.data);
        this.setState({
          reviews: response.data,
          pages: this.divideComments(response.data)
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  divideComments(comments, isSearching = false) {
    let totalComments = [];
    let setOfComments = [];
    for(let i = 0; i < comments.length; i++) {
      let review = comments[i];
      setOfComments = (setOfComments.length % 7 === 0) ? [] : setOfComments;
      
      if(isSearching) {
        if(this.includesSearchTerm(review)) {
          setOfComments.push(review);
        }
      } else {
        setOfComments.push(review);
      } 
      
      if(setOfComments.length === 7 || i === comments.length - 1) { 
        totalComments.push(setOfComments) 
      }; 
    }

    return totalComments;
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
      searchTerm: '',
      pages: this.divideComments(this.state.reviews)
    });
  }

  searchFor(event) {
    if(event.key === 'Enter') {
      this.setState({
        pages: this.divideComments(this.state.reviews, true),
        currentPage: 0
      });
    }
  }

  includesSearchTerm(review) {
    return review.comment.split(' ').includes(this.state.searchTerm);
  }

  handlePageChange(event) {
    let value = event.target.innerText;
    if(isNaN(parseInt(value))) {
      let direction = value === '>' ? 1 : -1;
      this.setState({
        currentPage: this.state.currentPage + direction
      })
    } else {
      this.setState({
        currentPage: value - 1
      })
    }
  }

  render() {
    let totalRating = this.computeTotalRating();
    let subRatings = this.computeSubRatings();
    let currentPage = this.state.currentPage;
    return (
      <AppContainer>
        <Top>
          <Rating isTotal={true} numOfReviews = {this.state.reviews.length} 
          total={isNaN(totalRating) ? 0 : totalRating}/>
          <SearchBar searchTerm={this.state.searchTerm} onKeyPress={this.searchFor.bind(this)}
          onChange={this.handleSearchChange.bind(this)} onClick={this.handleSearchCancel.bind(this)}/>
        </Top>
        <Rating subRatings={subRatings}/>
        <Comment reviews={this.state.pages[currentPage]}/>
        <PageNumber numOfPages={this.state.pages.length} currentPage={this.state.currentPage}
        onClick={this.handlePageChange.bind(this)}/>
      </AppContainer>
    )
  }
}

export default Review;