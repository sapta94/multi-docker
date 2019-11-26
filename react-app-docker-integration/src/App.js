import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarMenu from "./components/NavbarMenu"
import Home from "./components/Home"

import './App.css';

function App() {
  return (
    <div className="App">
          <NavbarMenu/>
          <Home/>
    </div>
  );
}

export default App;
