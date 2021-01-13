import React, {useState} from 'react';
import Home from './Home';
import {Redirect} from 'react-router-dom';
import { Grid, Paper, Avatar, TextField, Button, Link, Typography } from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';
import createHistory from 'history'
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function Login() {

    //login State variables
    const [userName,setuserName]=useState("");
    const [password,setPassword]=useState("");
    const [loginSuccess,setLoginSuccess]=useState(false);

    //css styling
    const paperStyle ={padding: 20, height: '70vh' ,width: 280, margin: "20px auto"}
    const avatarStyle={backgroundColor:'green'}
    const btnStyle={margin:'8px 0px'}

    
    //onChange Method
    const userNameField = (userName) =>{
        console.log('User Name '+ userName)
        setuserName(userName)
    }

    const userPasswordField = (userPassword) =>{
        console.log('User Password '+ userPassword)
        setPassword(userPassword)
    }


    //formLogin
    const formLogin = (e) =>{
        e.preventDefault()

        if(userName =='asimmehmood@gmail.com' && password =='1234'){
            //redirect to home
            console.log('success');
            setLoginSuccess(true);
        }
        else{
            //redirect to log in
            console.log('failed')
        }
    }

    return (
        <div style={{ marginTop: "10vh" }}>

            {!loginSuccess ? <Grid>
                <Paper elevation={10} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}>
                            <LockIcon/>
                        </Avatar>
                        <h1>Sign in</h1>
                    </Grid>
                    <form onSubmit={formLogin}>
                        <TextField label='User Name' placeholder='Enter User Name'fullWidth required onChange={
                            (e)=>{userNameField(e.target.value)}} />

                        <TextField label='Password'type='password' placeholder='Enter password'fullWidth required onChange={
                            (e)=>{userPasswordField(e.target.value)}}/>
                        <FormControlLabel
                            control={
                            <Checkbox
                                name="checkedB"
                                color="primary"
                            />
                            }
                            label="Remember Me"
                        />
                        <Button type='submit' onClick={formLogin} color='primary' variant='contained' style={btnStyle} fullWidth>Login</Button>
                    </form>

                    <Typography>
                        <Link href="#">
                            Forgot Password
                        </Link>
                    </Typography>

                    <Typography>
                        Don`t have an account?
                        <Link href="/signup">
                            Sign Up
                        </Link>
                    </Typography>
                </Paper>
            </Grid>         
            : <Redirect to='/home' /> 
}
        </div>
    )
}
