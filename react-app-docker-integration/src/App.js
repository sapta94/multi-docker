import React from 'react';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarMenu from "./components/NavbarMenu"
import Home from "./components/Home"
import {BrowserRouter,Route} from 'react-router-dom'

import './App.css';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <div>
            <NavbarMenu/>
            <Route exact path="/" component={Home} />
          </div> 
        </BrowserRouter>
    </div>
  );
}

export default App;
