import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '../App.css';
import NavBar from '../components/Navbar';
import MainSection from '../components/MainSection';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Blog from '../components/Blog';
import Contact from '../components/Contact';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <Router>
            <NavBar />
            <MainSection />
            <About />
            <Portfolio />
            <Blog />
            <Contact />
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
