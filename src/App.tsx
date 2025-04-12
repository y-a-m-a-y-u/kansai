import React from 'react';
import './App.css';
import Top from './Top';
import {BrowserRouter, Route} from 'react-router-dom';
import Onnyoku from './onnyoku';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path='/'>
          <Top/>
        </Route>
        <Route path='/温浴'>
          <Onnyoku/>
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
