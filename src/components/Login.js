import React, { useState } from 'react'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function Login() {
   {/*input data from login screen*/}
  const[username,setUserName]=useState('');
  const[password,setPassword]=useState('');
 
   {/*functions to handle change and
    submission of login data
  */}
  const handleSubmit=()=>{
     console.log(username,password)
  }

  const handleUserNameChange=(event)=>{
      setUserName(event.target.value)
  }
  const handleUserPasswordChange=(event)=>{
    setPassword(event.target.value)
}
  return (
    <div>

      {/*Grid for main login UI */}
       <Grid container spacing={3} direction="column" alignItems={'center'}  alignContent={'center'}>
  <Grid item xs={12} md={8}>
    <h1>Efficient Tech</h1>
  </Grid>
  <Grid item xs={12} md={8}>
    Admin Panel
  </Grid>
  <Grid item xs={12} md={8}>
  <TextField id="username"
   label="username"
   value={username}
   onChange={handleUserNameChange}
    variant="outlined" />
  </Grid>
  <Grid item xs={12} md={8}>
  <TextField 
  id="password"
  type='password'
  value={password}
   onChange={handleUserPasswordChange}
   label="password"
    variant="outlined" />
  </Grid>
  <Grid item xs={12} md={8}>
  <Button size="large" fullWidth onClick={handleSubmit} variant="contained">Login</Button>
  </Grid>
</Grid> 
    </div>
  )
}

export default Login