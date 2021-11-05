// frontend/src/components/Navigation/index.js
import React from 'react';
import {useState} from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as sessionActions from "../../store/session";

import './Navigation.css';


function Navigation({ isLoaded }){
const dispatch = useDispatch();
const sessionUser = useSelector((state) => state.session.user);
const [credential, setCredential] = useState("");
const [password, setPassword] = useState("");


const handleLogout = (e) => {
    e.preventDefault();
    return dispatch(sessionActions.logout({ credential, password }))
  };
    const demoLogin = async () =>{
    setCredential("Demo_User");
    setPassword("password");
    return dispatch(
      sessionActions.login({ credential: "demo@demo.com", password: "password" })
    );
  };


const loginButton = <NavLink to="/login"><button id="log-in-button" > Login </button></NavLink>





const logOutButton =  <button id="log-in-button" onClick={handleLogout}> {sessionUser ? "Log out" : "Login" }</button>



    return (
        <div className="header-container">
            <NavLink  exact to= '/' id="logo">Query</NavLink>
            <div id="search-and-sign-in">
                <input type="search" name="searchbar" id="searchbar" placeholder="Enter your question here" />

            </div>
            <button id="demo-button" onClick={demoLogin}> Demo user</button>
            <NavLink to="/signup" >
            <button id="sign-in-button"> Sign up</button>
            </NavLink>
            {sessionUser ? logOutButton : loginButton}
    
        </div>
    )
}


export default Navigation;
