import styled from 'styled-components';

export const ReviewInfo = styled.div`
  color: #484848;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
  display: table;
  width: 100%;
  margin-top: 16px;
`
export const ReviewImage = styled.img`
  box-sizing: border-box;
  display: block;
  width: 50px;
  height: 50px;
  background-size: 100% 100%;
  border-radius: 50% 50%;
  object-fit: fill;
`

export const NameDate = styled.div`
  display: table-cell;
  width: 100%;
  vertical-align: top;
  padding-left: 16px;
`

export const ReviewName = styled.div`  
  font-weight: 600;
  font-size: 16px;
`
export const ReviewDate = styled.div`
  font-weight: 400;
  font-size: 14px;
`

export const ReviewFlag = styled.div`
  display: table-cell;
  vertical-align: top;
`

export const ReviewComment = styled.div`
  color: #484848;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
  margin-top: 16px;
`