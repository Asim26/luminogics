import React, {useState} from 'react'
import { Tabs, Tab, AppBar } from "@material-ui/core";
import { Route, BrowserRouter, Switch, Link, Redirect } from "react-router-dom";
import Login from './Login';
import { makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));



export default function Header() {

  const classes = useStyles();
  const navStyle={color: 'white'}

  const [logOutSuccess,setLogOutSuccess]=useState(false);

  const logout = () =>{
    console.log('logout')
    localStorage.removeItem("isAuth");
    setLogOutSuccess(true)
  }

  return (
        <div>
          {!logOutSuccess?  
          <div className={classes.root}>
            <AppBar position="static">
              <Tabs  aria-label="simple tabs example" >
              <Link to="/" style={navStyle}><Tab label="Login" /></Link>
              <Link to="/home" style={navStyle}><Tab label="Home" /></Link>
              <Link to="/About" style={navStyle}><Tab label="About" /></Link>
              <Link to="/Contact" style={navStyle}><Tab label="Contact" /></Link>
              {/* <Link to="/login" style={navStyle}><Tab label="Login" /></Link> */}
              <Link to="/signup" style={navStyle}><Tab label="Sign Up" /></Link>
              <Tab label="Logut" onClick={logout} />
              </Tabs>
            </AppBar>
          </div>: <Redirect to='/' />}    
        </div>
      )
}
