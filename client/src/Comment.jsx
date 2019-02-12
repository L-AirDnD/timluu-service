import React from 'react';
import ReactDOM from 'react';

class Comment extends React.Component {
  constructor(props) {
    super(props);
  }

  convertDate(date_posted) {
    let fullDate = new Date(date_posted);
    let month = new Intl.DateTimeFormat('en-US', {month: 'long'}).format(fullDate);
    let year = fullDate.getFullYear();

    return month + ' ' + year;
  }

  render() {
    return (
      <div>
        {this.props.reviews.map((review) => {
          return (
            <div>
              <div>Insert Image here.</div>
              <div>{review.name}</div>
              <div>{this.convertDate(review.date_posted)}</div>
              <div>Insert Flag button here.</div>
              <div>{review.comment}</div>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Comment;