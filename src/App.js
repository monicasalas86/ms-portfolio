import React from 'react';
import {Route, Switch} from 'react-router-dom';
import { Link } from 'react-router-dom';

import About from './components/About';
import Skills from './components/Skills';
import './App.css';

const App = () => {
  
  return (
    <main>
      <header>
          <nav>
            <Link to='/about' className='navlink'>about</Link>
            <Link to='/skills' className='navlink'>skills</Link>
          </nav>
      </header>
      <div className='portfolioBody'>
        <div className='intro'>
          <h1>hey there, i'm monica 👋🏼</h1>
          <p>a full stack web development student at lambda school</p>
          <About path='/about'/>
          <Skills path='/skills'/>
        </div>
      </div>
    </main>
  );
}

export default App;
