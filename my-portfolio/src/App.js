import React from 'react';
import logo from './logo.svg';
import './App.css';
import Bio from './components/Bio';
import Footer from './components/Footer';
import Skills from './components/Skills';
import Project from './components/Project';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      <Bio />
     <Skills />
     <Project />
     <Footer />
      </header>
    </div>
  );
}

export default App;
