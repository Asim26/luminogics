import React, {useState, useEffect, Fragment} from 'react'

// API Calling
//import { getUserAsync } from './Services/dataService'
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import LoginPage from './Component/Pages/LoginPage';
import HomePage from './Component/Pages/HomePage';
import AboutPage from './Component/Pages/AboutPage';
import ContactPage from './Component/Pages/ContactPage';
import SignUpPage from './Component/Pages/SignUpPage';
import NotFound from './Component/Pages/NotFound';

function App(props) {

  const[isAuthState, setisAutheticated] = useState(false);

  
  useEffect(() => {
    const isAutheticated = localStorage.getItem("isAuth");
    setisAutheticated(isAutheticated);
    console.log('=================', isAuthState, '++++', isAutheticated);
  },[isAuthState])

  // const isAuth = localStorage.getItem("isAuth");
  console.log('IsAuth', isAuthState);
  
  
  return (
    <Fragment>  
      <div>
        {/* Hi {props.name} */}
      </div>  
      <BrowserRouter>
        <Switch>
            <Route path="/" exact component={LoginPage} />
            { isAuthState ?           
            <>
              <Route path="/home" exact component={HomePage} />
              <Route path="/About" component={AboutPage} />
              <Route path="/Contact" component={ContactPage} />
              <Route path="/Signup" component={SignUpPage} />
              {/* <Route component={NotFound} /> */}
              </>
            : <Redirect to='/' />  }

        </Switch>
      </BrowserRouter>

    </Fragment>
  );
}

// App.defaultProps = {
//   name:'Ali'
// }
export default App;
