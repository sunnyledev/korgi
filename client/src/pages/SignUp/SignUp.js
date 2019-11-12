import React, {useEffect, useState} from 'react';
import "./signup-style.css";
import dog from "../SignIn/dog.png";
import ImageSVG from "./ImageSVG";
import {Link} from "react-router-dom";
import {Check} from "@material-ui/icons";
import API from "../../utils/API";
import validate from "../Validation/FormValidationRules";
import UseForm from "../Validation/UseForm";


function SignUp() {

    const [signUpForm, setSignUpForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        zipcode: "",
        dateOfBirth: ""
    });
  // React Hook states
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [zipCode, setZipCode] = useState("");
  let [date, setDate] = useState("");
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

    // const handleSubmit = event => {
    //     event.preventDefault();
    //     let canMakeUser = true;
    //     // Run saveUser if any credentials don't match previous users
    //     API.getUsers().then(res => {
    //         let users = res.data;
    //         users.forEach(user => {
    //             if(signUpForm.email === user.email) {
    //                 canMakeUser = false;
    //             }
    //         });
    //         if(canMakeUser) {
    //             console.log("User can be created");
    //             saveUser();
    //         } else {
    //             alert("Email is already in use. Please use another email address.");
    //             console.log("Email is already in use")
    //         }
    //         return;
    //     });
    // };

    const saveUser = () => {
        console.log(signUpForm);
        // Save userData

        // Re-Route to Home Page
        // return props.history.push("/user-page");
    };

    const {
        values,
        errors,
        handleChange,
        handleSubmit,
    } = UseForm(signup, validate);

    function signup() {
        console.log("Hey you did it!");
    }

  return (
      <div className="signin-outer">
          <div className="image-div">
              <ImageSVG style={{width: "80%"}}/>
              <p style={{margin: "10% 0 15px", fontSize: "0.9em", color: "rgba(80, 135, 114, 0.5)"}}>" We don't know when we are making memories when we're having fun "</p>
          </div>
          <div className='signin-div'>
              <form onSubmit={handleSubmit} noValidate className="signup-in-form">
                  <div id="image-outer">
                      <img className='pup-image' src={dog} alt=''/>
                  </div>
                  <h4 className="welcome-text">I Just Want To Know You More Before You Start !</h4>
                  <input value={values.firstname || ""} className={`input-style full-width ${errors.email && 'input-danger'}`} name="firstname" type="text"  placeholder="First Name" required onChange={handleChange}/>
                  {errors.firstname && (
                      <p className="text-danger">{errors.firstname}</p>
                  )}
                  <input value={lastName} className="input-style full-width" type="text"  placeholder="Last Name" required onChange={handleChange}/>
                  {errors.lastname && (
                      <p className="text-danger">{errors.firstname}</p>
                  )}
                  <input value={email } className="input-style full-width" type="email"  placeholder="Email Address" required onChange={handleChange}/>
                  {errors.email && (
                      <p className="text-danger">{errors.firstname}</p>
                  )}
                  <input value={password} className="input-style full-width" type="password"  placeholder="Password" required onChange={handleChange}/>
                  {errors.password && (
                      <p className="text-danger">{errors.firstname}</p>
                  )}
                  <input value={zipCode} className="input-style full-width" type="text"  placeholder="Zip Code" required onChange={handleChange}/>
                  {errors.zipcode && (
                      <p className="text-danger">{errors.firstname}</p>
                  )}
                  <input value={date} className="input-style full-width" type="date" onChange={handleChange}/>
                  {errors.birthday && (
                      <p className="text-danger">{errors.firstname}</p>
                  )}
                  <button style={{marginTop: "20px"}} type="submit" className="button sign-in">Sign Up</button>
              </form>

          <div className="divider-div"/>
              <h6>Just in case...</h6>
              <h5 style={{marginTop: '30px'}}>Already have an account? <Link to={"/login"}>Log In</Link></h5>
              <p style={{fontSize: '0.7em', color: '#a9a9a9', bottom: 0, position: 'absolute'}}>Copyright © Korgi Inc 2019</p>
          </div>
      </div>
  );
}

export default SignUp; 
