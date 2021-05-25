import React from "react";
import {
  Avatar,
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
} from "@material-ui/core";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const Signup = () => {
  const paperStyle = { padding: 20, width: 300, margin: "0 auto" };
  const headerStyle = { margin: 0 };
  const avatarStyle = { backgroundColor: "#1bbd7e" };
  const marginTop = { marginTop: 5 };
  const btnstyle = { margin: "8px 0" };

  return (
    <Grid>
      <Paper style={paperStyle}>
        <Grid align="center">
          <Avatar style={avatarStyle}>
            <AddCircleOutlineIcon />
          </Avatar>
          <h2 style={headerStyle}>Sign Up</h2>
          <Typography variant="caption" gutterBottom>
            Please fill this form to create an account
          </Typography>
        </Grid>
        <form>
          <TextField
            fullWidth
            label="Name"
            placeholder="Enter your Name"
          ></TextField>
          <TextField
            fullWidth
            label="Email"
            placeholder="Enter your Email"
            type="email"
          ></TextField>
          <FormControl component="fieldset" style={marginTop}>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              aria-label="gender"
              name="gender"
              style={{ display: "initial" }}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>
          <TextField
            fullWidth
            label="Phone Number"
            placeholder="Enter Your contact number"
            type="number"
          ></TextField>
          <TextField
            fullWidth
            label="Password"
            placeholder="Enter your Password"
            type="password"
          ></TextField>
          <TextField
            fullWidth
            label="Confirm Password"
            placeholder="Confirm your Password"
            type="password"
          ></TextField>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            style={btnstyle}
            fullWidth
          >
            Sign Up
          </Button>
        </form>
      </Paper>
    </Grid>
  );
};

export default Signup;
