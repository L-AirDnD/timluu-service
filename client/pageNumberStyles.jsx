import React from 'react';
const { styled } = window;

export const Pagination = styled.div`
  
`

export const PageNavigator = styled.button`
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
  color: #00A699;
  font-size: 14px;
  font-weight: 100;
  border-style: none;
  background-color: transparent;
  display: inline-block;
  width: 35px;
  height: 35px;
  margin: 5px 10px;
  border-radius: 50%;
  border-style: solid;
  border-color: #00A699;
`

export const PageNum = styled(PageNavigator)`
  border-style: none;

  ${(props) => props.current && `
    background: #00A699;
    color: #FFFFFF;
    border-style: solid;
  `}

  &:hover {
    text-decoration: underline;
  }
`