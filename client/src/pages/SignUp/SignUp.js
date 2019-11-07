import React, {useEffect, useState} from 'react';
import "./signup-style.css";
import dog from "../SignIn/dog.png";
import ImageSVG from "./ImageSVG";
import {Link} from "react-router-dom";

function SignUp() {
  // React Hook states
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [zipCode, setZipCode] = useState("");
  let [date, setDate] = useState(null);
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
              <ImageSVG style={{width: "80%"}}/>
          </div>
          <div className='sigup-div signin-div'>
              <div id="image-outer">
                  <img className='pup-image' src={dog} alt=''/>
              </div>
              <h4 className="welcome-text">I Just Want To Know You More Before You Start !</h4>
              <input className="input-style eighty-five-width" type="text"  placeholder="First Name" required/>
              <input className="input-style eighty-five-width" type="text"  placeholder="Last Name" required/>
              <input className="input-style eighty-five-width" type="email"  placeholder="Email Address" required/>
              <input className="input-style eighty-five-width" type="password"  placeholder="Password" required/>
              <input className="input-style eighty-five-width" type="text"  placeholder="Zip Code" required/>
              <input className="input-style eighty-five-width" type="date" placeholder="Birthday !important"/>
              <div className="remember-me-forgot-pass-div eighty-five-width" style={{margin: 0}}>
                  <input className="checkbox-input" type="checkbox" id="remember-me"/>
                  <label htmlFor="remember-me">Remember me</label>
                  <button className="button sign-up">Sign Up</button>
              </div>

          <div className="divider-div"/>
              <h6>Just in case...</h6>
              <h5 style={{marginTop: '30px'}}>Already have an account? <Link to={"/login"}>Log In</Link></h5>
              <p style={{fontSize: '0.7em', color: '#a9a9a9', bottom: 0, position: 'absolute'}}>Copyright © Korgi Inc 2019</p>
          </div>
      </div>
  );
}

export default SignUp; 
