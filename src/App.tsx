import React from 'react';
import { Home } from './components/Home';
import { Posts } from './components/Posts';
import { Analysis } from './components/Analysis';
import { Navbar } from './components/Navbar';
import './styles/animations.css';

function App() {
  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <Navbar />
      <Home />
      <Posts />
      <Analysis />
    </div>
  );
}

export default App;