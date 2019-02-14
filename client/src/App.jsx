import React from 'react';
import ReactDOM from 'react';
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
      <AppContainer>
        <Rating /><SearchBar />
        <Comment reviews={this.state.reviews}/>
        <PageNumber />
      </AppContainer>
    )
  }
}

export default App;