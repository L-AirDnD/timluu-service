import React from 'react';
import ReactDOM from 'react';
import axios from 'axios';
import Rating from './Rating.jsx';
import SearchBar from './SearchBar.jsx';
import Comment from './Comment.jsx';
import PageNumber from './PageNumber.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: []
    }
  }

  componentDidMount() {
    this.getReviews(4);
  }

  getReviews(offeringId) {
    axios.get(`/${offeringId}`)
      .then((response) => {
        this.setState({
          reviews: response.data
        })
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render() {
    return (
      <div>
        <Rating /><SearchBar />
        <Comment reviews={this.state.reviews}/>
        <PageNumber />
      </div>
    )
  }
}

export default App;