import React from 'react';
import { Link } from 'react-router-dom';
import "./style.css";
import track from "./track.png";

function f() {
    
}

function Navbar() {
    return (
        <nav className="navbar">
            <img id="home-image" src={track} alt="Main page"/>
            <ul id="menu">
                <li>
                    <Link to="/discover"
                          className={
                              window.location.pathname === "/" || window.location.pathname === "/discover"
                                  ? "nav-link active"
                                  : "nav-link"
                          }>
                        Explore
                    </Link>
                </li>
                <li>
                    <Link to="/task"
                          className={
                              window.location.pathname === "/" || window.location.pathname === "/task"
                                  ? "nav-link active"
                                  : "nav-link"
                          }>
                        Task
                    </Link>
                </li>
                <li>
                    <Link to="/user-page"
                          className={
                              window.location.pathname === "/" || window.location.pathname === "/user-page"
                                  ? "nav-link active"
                                  : "nav-link"
                          }>
                        User Page
                    </Link>
                </li>
                    <li>
                        <Link to="/login"
                              className={
                              window.location.pathname === "/" || window.location.pathname === "/login"
                                  ? "nav-link active"
                                  : "nav-link"}
                        >
                            Log In
                        </Link>
                    </li>
            </ul>
            {/*<AppBar position="static">*/}
            {/*  <Toolbar>*/}
            {/*    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">*/}
            {/*      <MenuIcon component={Link} to="abossut" />*/}
            {/*    </IconButton>*/}
            {/*    <Button component={Link} to="discover">*/}
            {/*      Explore*/}
            {/*    </Button>*/}
            {/*    <Button component={Link} to="task">*/}
            {/*      Task*/}
            {/*    </Button>*/}
            {/*    <Button component={Link} to="user-page">*/}
            {/*      User Page*/}
            {/*    </Button>*/}
            {/*    <Button className={classes.Login} color="inherit" component={Link} to="login">Login</Button>*/}
            {/*  </Toolbar>*/}
            {/*</AppBar>*/}
        </nav>
    );
}

export default Navbar; 
