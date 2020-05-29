import React from 'react';
import './App.css';
import './Jumbotron.css'
import './Navbar.css'
import './Footer.css'
import Navbar from './Navbar'
import Jumbotron from './Jumbotron'
import Footer from './Footer'
import Menu from './Menu'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Jumbotron />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
