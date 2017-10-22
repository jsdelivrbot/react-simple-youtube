import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    
    this.state = {term: ''};
  }
  
  render() {
    return (
      <div className="search-bar">
        <input onChange={ev => this.props.onVideoSearch(ev.target.value)} />
      </div>
    )
  }
};
