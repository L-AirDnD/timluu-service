import React from 'react';
import { Search, Bar, SearchIcon, SearchInput } from '../searchBarStyles.jsx';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Search>
        <Bar>
          <SearchIcon size="15"/>
          <SearchInput type="text" placeholder="Search reviews" value=""/>
        </Bar>
      </Search>
    )
  }
}

export default SearchBar;