import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '../App.css';
import NavBar from '../components/Navbar';
import MainSection from '../components/MainSection';
import Bio from '../components/Bio';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <Router>
            <NavBar />
            <MainSection />
            <Bio />
            <Portfolio />
            <Contact />
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
