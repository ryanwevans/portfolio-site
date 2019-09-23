import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '../App.css';
import NavBar from '../components/Navbar';
import Bio from '../components/Bio'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <Router>
            <NavBar />
            <Bio />
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
