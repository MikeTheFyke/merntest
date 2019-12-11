import React, { Component } from 'react';
import AppNavBar from './components/AppNavBar';
import 'bootstrap/dist/css/bootstrap.min.caa';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <AppNavBar />
        </div>
        <p className="App-intro">
          It Begins Here
        </p>
      </div>
    );
  }
}

export default App;
