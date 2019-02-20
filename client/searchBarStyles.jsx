const { styled } = window;
import { Search as Icon } from 'styled-icons/feather/Search';

export const Search = styled.div`
  display: inline-block;
  width: 33%;
  text-align: right;
  padding-left: 5px;
  padding-bottom: 5px;
`

export const Bar = styled.div`
  width: 100%;
  border-width: 1px;
  border-color: #EBEBEB;
  border-radius: 4px;
  border-style: solid;
  text-align: left;
`

export const SearchIcon = styled(Icon)`
  display: inline-block;
  padding-left: 5px;
  width: 10%;
`
export const SearchInput = styled.input`
  display: inline-block;
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
  font-size: 14px;
  color: #484848;
  padding-top: 7px;
  padding-bottom: 7px;
  padding-left: 5px;
  outline: none;
  border-width: 0px;
  width: 75%;
  text-align: left;
`
export const SearchCancel = styled.div`
  display: inline-block;  
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
  font-size: 16px;
  color: #484848;
  font-weight: 100; 
  vertical-align: middle;
  text-align: right;
  width: 5%;
`
