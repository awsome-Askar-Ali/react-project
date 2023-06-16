import React from 'react';
import './App.css';

import { Navigation } from './components/navigation';
import { Header } from "./components/header";
import { Section } from "./components/section";
import { Footer } from './components/footer';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Section />
      <Footer />
    </div>
  );
}

export default App;
