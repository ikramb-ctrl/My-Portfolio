import React from 'react';
import logo from './logo.svg';
import './App.css';
import Bio from './components/Bio';
import Footer from './components/Footer';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Bio />
     <Skills />
      </header>
    </div>
  );
}

export default App;
