import React from 'react';
import './App.css';
import Top from './Top';
import {Routes, Route, useLocation} from 'react-router-dom';
import Onnyoku from './onnyoku';

function App() {
  const location = useLocation();
  return (
  <>
          <div className='App'>
            <Routes location={location}>
              <Route path="/" element={<Top/>} />
              <Route path="/Onnyoku" element={<Onnyoku/>} />
            </Routes>
          </div>
      </>
  );
}

export default App;
