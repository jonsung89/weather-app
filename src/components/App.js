import React, { Component } from 'react';
import LeftContainer from './LeftContainer';
import RightContainer from './RightContainer';
import '../styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="main">
          <LeftContainer />
          <RightContainer />
        </div>
      </div>
    );
  }
}

export default App;
