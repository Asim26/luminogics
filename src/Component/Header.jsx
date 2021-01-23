import React, {useState} from 'react'
import { Tabs, Tab, AppBar } from "@material-ui/core";
import { Link, Redirect } from "react-router-dom";
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
    // console.log('logout')
    localStorage.removeItem("isAuth");
    setLogOutSuccess(true)
  }

  return (
        <div>
          {!logOutSuccess?  
          <div className={classes.root}>
            <AppBar position="static">
              <Tabs  aria-label="simple tabs example" >
                {logOutSuccess? <Link to="/" style={navStyle}><Tab value={false} label="Login" /></Link>:""}
              <Link to="/home" style={navStyle}><Tab value={false} label="Home" /></Link>
              <Link to="/userPost" style={navStyle}><Tab value={false} label="User Posts" /></Link>
              <Link to="/About" style={navStyle}><Tab value={false} label="About" /></Link>
              <Link to="/Contact" style={navStyle}><Tab value={false} label="Contact" /></Link>
              {/* <Link to="/login" style={navStyle}><Tab label="Login" /></Link> */}
              {logOutSuccess? <Link to="/signup" style={navStyle}><Tab value={false} label="Sign Up" /></Link>:""}
              <Tab value={false} label="Logut" onClick={logout} />
              </Tabs>
            </AppBar>
          </div>: <Redirect to='/' />}    
        </div>
      )
}
