import React, {useState, useEffect} from 'react'

// API Calling
import { getUserAsync } from './Services/dataService'
import Login from './Component/Login';
import Signup from './Component/Signup';

import Header from './Component/Header';
import About from './Component/About';
import Contact from './Component/Contact';
import {BrowserRouter, Router, Route, Switch} from 'react-router-dom';
import Home from './Component/Home';


function App() {
  
  return (
    <BrowserRouter>
     <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/home" exact component={Home} />
      <Route path="/About" component={About} />
      <Route path="/Contact" component={Contact} />
      <Route path="/Signup" component={Signup} />
    </Switch>
    </BrowserRouter>

  );
}

export default App;
