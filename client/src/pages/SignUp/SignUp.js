import React, {useEffect, useState} from 'react';
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
import ImageSVG from "./ImageSVG";

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

    const allDaysMonthsYears = (n=0,m=0, isYear=false) => {
        let currentYear;
        if (isYear) { currentYear = new Date().getFullYear() + 1 }

        let numbers = [];
        for (let i = n; i < (isYear ? currentYear : m); i++) {
            numbers.push(<option key={i} value={i}/> );
        }
        return numbers;
    };

  return (
      <div className="signin-outer">
          <div className="image-div">
              <ImageSVG style={{width: "80%"}}/>
          </div>
          <div className='sigup-div signin-div'>
              <div id="image-outer">
                  <img className='pup-image' src={dog} alt=''/>
              </div>
              <h4 className="welcome-text">Welcome Korgi's New Member !</h4>
              <input className="input-style eighty-five-width" type="text"  placeholder="First Name" required/>
              <input className="input-style eighty-five-width" type="text"  placeholder="Last Name" required/>
              <input className="input-style eighty-five-width" type="email"  placeholder="Email Address" required/>
              <input className="input-style eighty-five-width" type="password"  placeholder="Password" required/>
              <input className="input-style eighty-five-width" type="text"  placeholder="Zip Code" required/>
              <div className="date-div">
                  <input className="input-style flex-grow-width" type="text"  placeholder="Month" required list="month-data"/>
                  <input className="input-style flex-grow-width" type="text"  placeholder="Day" required list="day-data"/>
                  <input className="input-style flex-grow-width" type="text"  placeholder="Year" required list="year-data"/>
                  <datalist id="month-data">{allDaysMonthsYears(1,13)}</datalist>
                  <datalist id="day-data">{allDaysMonthsYears(1,32)}</datalist>
                  <datalist id="year-data">{allDaysMonthsYears(1979, 0, true)}</datalist>
              </div>
              <div className="remember-me-forgot-pass-div">
                  <input className="checkbox-input" type="checkbox" id="remember-me"/>
                  <label htmlFor="remember-me">Remember me</label>
              </div>
              <button className="sign-in">Sign Up</button>
              <div className="divider-div"/>
              <h6>Just in case...</h6>
              <h5 style={{marginTop: '30px'}}>Already have an account? <Link to={'/login'}>Sign in</Link></h5>
              <p style={{fontSize: '0.7em', color: '#a9a9a9', bottom: 0, position: 'absolute'}}>Copyright © Korgi Inc 2019</p>
          </div>
      </div>
  );
}

export default SignUp; 
