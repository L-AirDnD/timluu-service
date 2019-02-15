import { Star } from 'styled-icons/material/Star';
import { StarHalf } from 'styled-icons/material/StarHalf';
import { StarBorder } from 'styled-icons/material/StarBorder';
import styled from 'styled-components';

export const Top = styled.div`
  display: table;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
  font-size: 24px;
  font-weight: 650;
`

export const NumOfReviews = styled.div`
  display: table-cell;
  padding-right: 14px;
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