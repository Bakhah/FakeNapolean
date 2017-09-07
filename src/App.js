import React, { Component } from 'react';
import logo from './logo.svg';
import * as NapoleonSay from './napoleonSay'

class App extends Component {
  render() {
    return (
      <h1 className="App">
        {NapoleonSay.sentence()}
      </h1>
    );
  }
}

export default App;
