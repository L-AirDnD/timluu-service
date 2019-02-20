import { Star } from 'styled-icons/boxicons-solid/Star';
import { StarHalf } from 'styled-icons/boxicons-solid/StarHalf';
import { Star as StarBorder } from 'styled-icons/boxicons-regular/Star';
const { styled } = window;

export const TopLeft = styled.div`
  display: inline-block;
  width: 66%;
`

export const NumOfReviews = styled.div`
  display: inline-block;
  width: 35%;
`

export const Stars = styled.div`
  display: inline-block;
  width: 65%;
  padding-bottom: 2px;
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