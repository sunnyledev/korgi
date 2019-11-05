import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Discover from "./pages/Discover";
import About from "./pages/About";
import Search from "./pages/Search";
import SignInSide from "./pages/SignIn/SignInSide";
import SignUp from "./pages/SignUp";
import UserPage from "./pages/UserPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper"; 
import TaskBar from "./components/TaskBar";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={About} />
        {/*  <Route exact path="/about" component={About} />*/}
          <Route exact path="/user-page" component={UserPage} />
          <Route exact path="/discover" component={Discover} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/login"  component={SignInSide} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/task" component={TaskBar} />
        </Switch>
        {/*<Footer />*/}
      </div>
    </Router>
  );
}

export default App;

// /Users/TinX/Desktop/projects/korgi-project/korgi/src/components/SignInSide/SignInSide.js
