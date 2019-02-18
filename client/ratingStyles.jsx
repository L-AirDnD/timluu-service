import { Star } from 'styled-icons/boxicons-solid/Star';
import { StarHalf } from 'styled-icons/boxicons-solid/StarHalf';
import { Star as StarBorder } from 'styled-icons/boxicons-regular/Star';
import styled from 'styled-components';

export const Top = styled.div`
  display: block;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
  font-size: 24px;
  font-weight: 650;
  width: 100%;
`

export const NumOfReviews = styled.div`
  display: inline-block;
  width: 18%;
`

export const Stars = styled.div`
  display: inline-block;
  width: 22%;
`

export const GreenStar = styled(Star)`
  color: #00A699;
`

export const GreenStarHalf = styled(StarHalf)`
  color: #00A699;
`

export const GreenStarBorder = styled(StarBorder)`
  color: #00A699;
`

export const SubRatings = styled.div`
  display: table;
  width: 100%;
  color: #484848;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
  font-size: 16px;
`

export const RatingsColumn = styled.div`
  display: table-cell;
  width: 50%;
`

export const RatingField = styled.div`
  display: block;
  box-sizing: border-box;
  padding: 10px;
  width: 100%;
`

export const RatingName = styled.div`
  display: inline-block;
  width: 50%;
`

export const RatingStars = styled.div`
  display: inline-block;
  width: 50%;
  text-align: right;
`