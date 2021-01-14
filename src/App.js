import React, {useState, useEffect, Fragment} from 'react'

// API Calling
//import { getUserAsync } from './Services/dataService'
import Login from './Component/Login';
import Signup from './Component/Signup';

import About from './Component/About';
import Contact from './Component/Contact';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import Home from './Component/Home';


function App() {

  const[isAuthState, setisAutheticated] = useState(false);

  
  useEffect(() => {
    const isAutheticated = localStorage.getItem("isAuth");
    setisAutheticated(isAutheticated);
    console.log('=================', isAuthState, '++++', isAutheticated);
  })

  // const isAuth = localStorage.getItem("isAuth");
  console.log('IsAuth', isAuthState);
  
  
  return (
    <Fragment>    
      <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Login} />
            { isAuthState ? 
          
            <>
              <Route path="/home" exact component={Home} />
              <Route path="/About" component={About} />
              <Route path="/Contact" component={Contact} />
              <Route path="/Signup" component={Signup} />
              </>
            : <Redirect to='/' />  }

        </Switch>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
