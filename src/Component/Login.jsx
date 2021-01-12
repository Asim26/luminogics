
import React from 'react';

import { Grid, Paper, Avatar, TextField, Button, Link, Typography } from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

export default function Login() {
    
    const paperStyle ={padding: 20, height: '70vh' ,width: 280, margin: "20px auto"}
    const avatarStyle={backgroundColor:'green'}
    const btnStyle={margin:'8px 0px'}

    return (
        <div style={{ marginTop: "10vh" }}>

            {/* <h1 style={{ marginTop: "10vh" }}>Login</h1> */}
            
            <Grid>
                <Paper elevation={10} style={paperStyle}>
                    <Grid align='center'>
                        <Avatar style={avatarStyle}>
                            <LockIcon/>
                        </Avatar>
                        <h1>Sign in</h1>
                    </Grid>
                    <TextField label='User Name' placeholder='Enter User Name'fullWidth required/>
                    <TextField label='Password'type='password' placeholder='Enter password'fullWidth required/>
                    <FormControlLabel
                        control={
                        <Checkbox
                            name="checkedB"
                            color="primary"
                        />
                        }
                        label="Remember Me"
                    />
                    <Button type='submit' color='primary' variant='contained' style={btnStyle} fullWidth>Login</Button>
                    
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

        </div>
    )
}
