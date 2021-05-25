import React from 'react'
import {Avatar, Button, Grid, Paper, TextField, Typography,Link} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const login = ({handleChange}) => {

    const paperStyle={padding:20,height:'73vh',width:300, margin:'0 auto'}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnstyle = {margin: '8px 0'}
    return (
        <Grid>
            <Paper style={paperStyle}>
            <Grid align="center">
                <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                <h2>Sign In</h2>
            </Grid>
            <TextField label='Username' placeholder='Enter username' type='text' fullWidth required/>
            <TextField label='Password' placeholder='Enter password' type='password' fullWidth required/>
            <FormControlLabel
        control={
          <Checkbox
            name="checkedB"
            color="primary"
          />
        }
        label="Remember Me"
      />
      <Button variant="contained" type="submit" color="primary" style={btnstyle} fullWidth>Sign In</Button>
      <Typography>
      <Link href="#">
            Forgot Password ? 
        </Link>
      </Typography>

      <Typography>Do you have an account ? 
      <Link href="#" onClick={()=>handleChange("event",1)}>
            Sign Up 
        </Link>
      </Typography>
            </Paper>
        </Grid>
    )
}

export default login
