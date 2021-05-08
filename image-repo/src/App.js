import logo from './logo.svg';
import './App.css';
import ImageGrid from './components/ImageGrid';
import Navbar from './components/Navbar';
import React from 'react'


function App() {
  return (
    <div>
        <Navbar />
        <ImageGrid />
      </div>
  );
}

export default App;
