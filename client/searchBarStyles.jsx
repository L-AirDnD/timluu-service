import styled from 'styled-components';
import { Search as Icon } from 'styled-icons/feather/Search';

export const Search = styled.div`
  display: inline-block;
  width: 33%;
  text-align: right;
  padding-left: 5px;
`

export const Bar = styled.div`
  width: 100%;
  border-width: 1px;
  border-color: #EBEBEB;
  border-radius: 4px;
  border-style: solid;
`

export const SearchIcon = styled(Icon)`
  display: inline-block;
  margin: 0;
  text-align: left;
  width: 10%;
`
export const SearchInput = styled.input`
  font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif;
  font-size: 14px;
  font-color: #484848;
  padding: 7px;
  outline: none;
  border-width: 0px;
  width: 80%;
`