import React from 'react';
import About from './components/About';
import Skills from './components/Skills';
import './App.css';

function App() {
  
  return (
    <main>
      <header>

      </header>
      <div className='intro'>
        <h1>hey there, i'm monica 👋🏼</h1>
        <p>a full stack web development student at lambda school</p>
      </div>
      <About/>
      <Skills/>
    </main>
  );
}

export default App;
