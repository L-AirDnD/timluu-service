import React from 'react';
import ReactDOM from 'react';
import { 
  ReviewInfo, 
  ReviewComment, 
  ReviewImage, 
  NameDate,
  ReviewName, 
  ReviewDate, 
  ReviewFlag 
} from '../commentStyles.jsx';
import { Flag } from 'styled-icons/feather/Flag';

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
              <ReviewInfo>
                <ReviewImage src={`https://s3-us-west-1.amazonaws.com/lairdnd-guests/sample_profile_pics/image_${review.id}.jpg`}>
                </ReviewImage>
                <NameDate>
                  <ReviewName>{review.guest}</ReviewName>
                  <ReviewDate>{this.convertDate(review.date_posted)}</ReviewDate>
                </NameDate>
                <ReviewFlag>
                  <Flag size="15"/>  
                </ReviewFlag>
              </ReviewInfo>
              <ReviewComment>
                <div>{review.comment}</div>
              </ReviewComment>  
            </div>
          )
        })}
      </div>
    )
  }
}

export default Comment;