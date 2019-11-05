import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CustomizedSelects from '../../components/BirthDate';
import "./signup-style.css";
import dog from "../SignIn/dog.png";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Korgi Inc
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function SignUp() {
  // React Hook states
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [zipCode, setZipCode] = useState("");
  // useState for date of birth information

  const saveUserInfo = () => {
    let userData = [
      firstName = this.firstName,
      lastName = this.lastName,
      email = this.email,
      password = this.password,
      zipCode = this.zipCode,
    ];
    console.log(userData);
  };

  return (
      <div className="signin-outer">
          <div className="image-div">
              <div id="theimage"/>
          </div>
          <div className='signin-div'>
              <div id="image-outer">
                  <img className='pup-image' src={dog} alt=''/>
              </div>
              <h4 className="welcome-text">Welcome Korgi's New Member !</h4>
              <input className="input-style" type="email"  placeholder="Email"/>
              <input className="input-style" type="password"  placeholder="Password"/>
              <div className="remember-me-forgot-pass-div">
                  <input className="checkbox-input" type="checkbox" id="remember-me"/>
                  <label htmlFor="remember-me">Remember me</label>
                  <Link to='/forgot-password'>Forgot password?</Link>
              </div>
              <button className="sign-in">Sign In</button>
              <div className="divider-div"/>
              <h6>Just in case...</h6>
              <h5 style={{marginTop: '30px'}}>Don't have an account? <Link to={'/sign-up'}>Create one</Link></h5>
              <p style={{fontSize: '0.7em', color: '#a9a9a9', bottom: 0, position: 'absolute'}}>Copyright © Korgi Inc 2019</p>
          </div>
      </div>
  );
}

export default SignUp; 
