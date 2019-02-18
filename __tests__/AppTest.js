import React from 'react';
import Enzyme, { mount, render, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from '../client/src/App.jsx';
import Rating from '../client/src/Rating.jsx';
import Comment from '../client/src/Comment.jsx';
import PageNumber from '../client/src/PageNumber.jsx';
import axios from 'axios';

Enzyme.configure({adapter: new Adapter});

describe('Tests App functionality', () => {
  it('renders', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders two <Rating />, one <Comment />, and one <PageNumber /> components', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(Rating)).toHaveLength(2);
    expect(wrapper.find(Comment)).toHaveLength(1);
    expect(wrapper.find(PageNumber)).toHaveLength(1);
  });

  it('gets 100 reviews from database', () => {
    const wrapper = shallow(<App />);
    let app = wrapper.instance();
    app.getReviews(1)
      .then(() => {
        expect(app.state.reviews).toHaveLength(100);
      });
  })

  it('parses ratings of a review', () => {
    const wrapper = shallow(<App />);
    let reviews = [
      {
        testField: `{ "shouldNotBeChanged": true }`,
        ratings: `{"accuracy": 1, "communication": 1, "cleanliness": 1, "location": 1, "checkin": 1, "value": 1}`
      }
    ];
    wrapper.instance().parseRatings(reviews);
    expect(typeof reviews[0].ratings).toEqual('object');
    expect(typeof reviews[0].testField).toEqual('string');
    expect(Object.keys(reviews[0].ratings).length).toEqual(6);
  });


  it('computes sub and total ratings', () => {
    const wrapper = shallow(<App />);
    let app = wrapper.instance();
    app.setState({
      reviews: [
        { 
          comment: "Test 1", date_posted: "2011-05-02T07:00:00.000Z", 
          guest: "Tester McTest1", id: 1, owner: "Bartholome Quitzon Jr.",
          ratings: {
            accuracy: 1, checkin: 1, cleanliness: 1,
            communication: 1, location: 1, value: 1
          },
          reply: null, title: "New LafayetteVanuatu"
        },
        { 
          comment: "Test 2", date_posted: "2011-05-02T07:00:00.000Z", 
          guest: "Tester McTest2", id: 2, owner: "Bartholome Quitzon Jr.",
          ratings: {
            accuracy: 3, checkin: 3, cleanliness: 3,
            communication: 3, location: 3, value: 3
          },
          reply: null, title: "New LafayetteVanuatu"
        },
        { 
          comment: "Test 3", date_posted: "2011-05-02T07:00:00.000Z",
          guest: "Tester McTest3", id: 3, owner: "Bartholome Quitzon Jr.",
          ratings: {
            accuracy: 5, checkin: 5, cleanliness: 5,
            communication: 5, location: 5, value: 5
          },
          reply: null, title: "New LafayetteVanuatu"
        }
      ]
    }, () => {
      expect(app.computeTotalRating()).toEqual(3);
      expect(app.computeSubRatings()).toEqual({
        accuracy: 3, checkin: 3, cleanliness: 3,
        communication: 3, location: 3, value: 3
      });
    });


  })
});