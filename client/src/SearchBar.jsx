import React from 'react';
import { 
  Search, 
  Bar, 
  SearchIcon, 
  SearchInput, 
  SearchCancel 
} from '../searchBarStyles.jsx';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Search>
        <Bar>
          <SearchIcon size="15"/>
          <SearchInput type="text" placeholder="Search reviews" onKeyPress={this.props.onKeyPress}
          value={this.props.searchTerm} onChange={this.props.onChange}/>
          {
            this.props.searchTerm === '' ? '' : 
            <SearchCancel onClick={this.props.onClick}>X</SearchCancel>
          }
        </Bar>
      </Search>
    )
  }
}

export default SearchBar;