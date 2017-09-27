import React, { Component } from 'react';
import { postData } from './application-data';
import SearchBar from './SearchBar';
import PostContainer from './PostContainer';
import './App.css';

class App extends Component {
  constructor () {
    super();
    this.state = {
      Posts: [],
    };
  }

  componentDidMount() {
    this.setState({Posts: postData});
  }

  render() {
    return (
      <div className="App">
      <SearchBar/>
      <PostContainer postData={this.state.Posts}/>
      </div>
    );
  }
}

export default App;
