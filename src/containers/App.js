import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../components/Navbar.js';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <div className="navigation">
          <Router>
            <NavBar />
          </Router>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
