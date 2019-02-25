import React from 'react';
import { Pagination, PageNum, PageNavigator } from '../pageNumberStyles.jsx';

class PageNumber extends React.Component {
  constructor(props) {
    super(props);
  }

  createPages() {
    let pages = [];
    for(let i = 0; i < this.props.numOfPages; i++) {
      pages.push(
        <PageNum current={this.props.currentPage === i ? true : false} onClick={this.props.onClick}>
          {i+1}
        </PageNum>)  
    }
    return pages;
  }

  render() {
    if(this.props.numOfPages <= 1) {
      return (
        <div>
        </div>
      )
    } else {
      return (
        <Pagination>
          {this.props.currentPage !== 0 ? <PageNavigator onClick={this.props.onClick}>{'<'}</PageNavigator> : ''}
          {this.createPages()}
          {this.props.currentPage !== (this.props.numOfPages - 1) ? <PageNavigator onClick={this.props.onClick}>{'>'}</PageNavigator> : ''}
        </Pagination>
      )
    }
  }
}

export default PageNumber;