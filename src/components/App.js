import React, { Component } from 'react';
import logo from './assets/img/logo.svg';
import './assets/css/App.css';
import Header from './Header'

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> Hello world.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button className="btn btn-success">Ok</button>
        </header>
      </div>
    );
  }
}

export default App;
