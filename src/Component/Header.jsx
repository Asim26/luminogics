import React from 'react'
import { Tabs, Tab, AppBar } from "@material-ui/core";
import { Route, BrowserRouter, Switch, Link } from "react-router-dom";

import Home from './Home';
import About from './About';
import Contact from './Contact';
import Login from './Login';
import Signup from './Signup';

export default function Header() {

  const routes = ["/", "/About","Contact","Login","Signup"];

  return (
        <div>
          {/* <h1>Header</h1> */}
          {/* <ul>
            <li> <Link to="/">Home</Link></li>
            <li> <Link to="About">About</Link> </li>
            <li> <Link to="Contact">Contact</Link> </li>
          </ul> */}


          <BrowserRouter>
                <Route path="/" render={(history) => (
                    <AppBar>
                      <Tabs value={history.location.pathname !== "/" ? history.location.pathname : false  } >
                        {console.log(history.location.pathname)}
                        <Tab value={routes[0]} label="Home" component={Link} to={routes[0]} />
                        <Tab value={routes[1]} label="About" component={Link} to={routes[1]} />
                        <Tab value={routes[2]} label="Contact" component={Link} to={routes[2]} />
                        <Tab value={routes[3]} label="Login" component={Link} to={routes[3]} />
                        <Tab value={routes[4]} label="Signup" component={Link} to={routes[4]} />
                      </Tabs>
                    </AppBar>
                  )}
                />

                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/About" component={About} />
                  <Route path="/Contact" component={Contact} />
                  <Route path="/Login" component={Login} />
                  <Route path="/Signup" component={Signup} />
                </Switch>
          </BrowserRouter>
        </div>
      )
}
