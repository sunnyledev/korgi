import React, { useState } from 'react';
import {Link, Redirect} from 'react-router-dom'
import './signin-style.css';
import dog from './dog.png'

const inputStyle = {
  borderRadius: '500px',
  width: '70%',
  padding: '0 15px',
  height: '50px',
  margin: '15px 0',
  borderWidth: 0,
  backgroundColor: '#f5f7fb'
};

function SignInSide(props) {
  // Hook States
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [redirect, setRedirect] = useState(false);

  // Function to take user info on login button click
  const loginSubmit = (email, password) => {
    let userData = [
      email,
      password
    ];
    console.log(userData);
  };
//
  const handleSubmit = event => {
    event.preventDefault();
    setRedirect(true); // true for now until passport involved
    // Save user info to db if valid info
    loginSubmit(email, password);

    // return(this.history.push("/"));
    return props.history.push("/about");
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
          <h4 style={{color: 'black', width: '100%', textAlign: 'center', marginBottom: '40px'}}>Welcome to Korgi !</h4>
          <input style={inputStyle} type="email"  placeholder="Email"/>
          <input style={inputStyle} type="password"  placeholder="Password"/>
          <div style={{width: '70%', display: 'flex', flexFlow: 'row wrap', alignItems: 'center', marginBottom: '50px'}}>
            <input className="checkbox-input" type="checkbox" id="remember-me"/>
            <label htmlFor="remember-me">Remember me</label>
            <Link to='/forgot-password' style={{flexGrow: 2, textAlign: 'end'}}>Forgot password?</Link>
          </div>
          <button className="sign-in">Sign In</button>
          <div style={{backgroundColor: 'rgba(192,192,192,0.35)', height: '1px', width: '80%', margin: '30px 0'}}/>
          <h6>Just in case...</h6>
          <h5 style={{marginTop: '30px'}}>Don't have an account? <Link to={'/sign-up'}>Create one</Link></h5>
          <p style={{fontSize: '0.7em', color: '#a9a9a9', bottom: 0, position: 'fixed'}}>Copyright © Korgi Inc 2019</p>
        </div>
      </div>
  );
}

export default SignInSide;
