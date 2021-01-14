import React, {useState, useEffect} from 'react';

import { Grid, Paper, Avatar, Typography, TextField, 
    Button, Link } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Checkbox from '@material-ui/core/Checkbox';

// const 
const Signup = () =>{

    // State vaiables
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [phoneNo,setPhoneNo]=useState("");
    const [gender,setGender]=useState("");
    const [password,setPassword]=useState("");
    const [cpassword,setcPassword]=useState("");
    
    const [isSubmit,setIsSubmit]=useState(false);
    
    // ternary opeartor
    //  name ? "" "Name is requured" : ""
    // css & styles
    const paperStyle = { padding: 20, width: 300, margin: "0 auto" }
    const headerStyle = { margin: 0 }
    const avatarStyle = { backgroundColor: '#1bbd7e' }
    const marginTop = { marginTop: 5 }

    //alert style
    const alert = {color: 'red'}

    // onChange Event Handlers

    const namefield = (name) =>{
        console.log('Name' +name)
        setName(name)
    }

    const emailfield = (email) =>{
        console.log('Email '+email)
        setEmail(email)
    }

    const genderfield = (gender) =>{
        console.log('Gender '+gender)
        setGender(gender)
    }

    const phonefield = (number) =>{
        console.log('Number '+number)
        setPhoneNo(number)
    }

    const passwordfield = (password) =>{
        console.log('Password '+password)
        setPassword(password)
    }

    const setpasswordfield = (cpassword) =>{
        console.log('Confirm Password '+cpassword)
        setcPassword(cpassword)        
    }

    // onSubmit
    const formSubmit = (form) =>{
       form.preventDefault()
       setIsSubmit(true);
       if(!name && !email && !phoneNo && !password && !cpassword && !gender){
        // setName("");
        return
      }
        //console.log('Form Submitted==================', form);
        const userObj={
            name,
            email,
            gender,
            phoneNo,
            password,
            cpassword

        }
        console.log('User-> Object', userObj);

    }

    useEffect(()=>{

    },[])

    console.log("name", name, "isSubmit", isSubmit);
    return (
        <div style={{ marginTop: "5vh" }}>
            
            <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                </Grid>
                <form onSubmit={formSubmit}>
                    <TextField fullWidth label='Name' placeholder="Enter your name" onChange={
                        (e)=>{namefield(e.target.value)}}
                    />
                    {!name && isSubmit ?  <p style={alert}>  Name is required </p> : ""}
                    
                    <TextField fullWidth label='Email' placeholder="Enter your email" onChange={
                        (e)=>{ emailfield(e.target.value) }}
                    />
                    {!email && isSubmit ?  <p style={alert}>  Email is required </p> : ""}

                    <FormControl component="fieldset" style={marginTop} onChange={
                        (e)=>{ genderfield(e.target.value) }}>

                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                        </RadioGroup>
                    </FormControl>

                    {!gender && isSubmit ?  <p style={alert}>  Gender is required </p> : ""}

                    <TextField fullWidth label='Phone Number' placeholder="Enter your phone number"  onChange={
                        (e)=>{phonefield(e.target.value)}}
                    />
                    {!phoneNo && isSubmit ?  <p style={alert}>  Phone No is required </p> : ""}

                    <TextField fullWidth label='Password' type='password' placeholder="Enter your password" onChange={
                        (e)=>{passwordfield (e.target.value) }}
                    />
                    {!password && isSubmit ?  <p style={alert}>  Password is required </p> : ""}

                    <TextField fullWidth label='Confirm Password' type='password' placeholder="Confirm your password" onChange={
                        (e)=>{setpasswordfield(e.target.value)}}
                    />
                    {!cpassword && isSubmit ?  <p style={alert}> Confirm Password is required </p> : ""}

                    <FormControlLabel
                        control={<Checkbox name="checkedA" />}
                        label="I accept the terms and conditions."
                    />

                    <Typography>
                        Already have an account?
                        <Link href="/login">
                            Sign in
                        </Link>
                    </Typography>

                    <Button type='submit' onClick={formSubmit} variant='contained' color='primary'>Sign up</Button>
                </form>
            </Paper>
        </Grid>

        </div>
    )
}

export default Signup;
