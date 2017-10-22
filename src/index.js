import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyD_-2MzvZm5zv-YWlrUh_nMsstHnnpojQg';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch('surfboard');
  }
  render() {
    return (
      <div>
        <SearchBar onVideoSearch={ _.debounce(term => {this.videoSearch(term)}, 500)} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={ selectedVideo => this.setState({ selectedVideo }) }
          videos={this.state.videos} />
      </div>
    );
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term},
    videos => this.setState({
      videos,
      selectedVideo: videos[0]
    }));
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));