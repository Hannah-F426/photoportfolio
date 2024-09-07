import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import Portfolio from './components/Portfolio.tsx';

import Albums from './components/Albums';
import Contact from './components/Contact';
import React from "react";
function App() {
  return (
      <Router>

          <div>
              <Navbar/>
              <Routes>
                  <Route path='/' element={<Home/>}/>

                  <Route path='/portfolio' element={<Portfolio/>}/>

                  <Route path='/albums' element={<Albums/>}/>

                  <Route path='/contact-me' element={<Contact/>}/>

              </Routes>

          </div>
      </Router>
  );
}

export default App;
