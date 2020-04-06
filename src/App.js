import React, { Component } from 'react';
import MainComponent from './main/main';
require('dotenv').config()
class App extends Component {
  render() {
    return (
      <MainComponent/>
    );
  }
}

export default App;
