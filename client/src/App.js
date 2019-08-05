import React from 'react';
import CardHolder from './components/CardHolder';
import 'semantic-ui-css/semantic.min.css';
import MenuBar from './components/MenuBar';
import Home from './components/Home.js';
import Contact from './components/Contact';
import './app.css';


function App() {
  return (
    <div className="App" >
      <MenuBar />
      <Home name='home' />
      <CardHolder />
      <Contact />
    </div>
  );
}

export default App;
