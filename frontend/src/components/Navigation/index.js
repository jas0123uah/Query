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
    setCredential("Demo-lition");
    setPassword("password");
    return dispatch(
      sessionActions.login({ credential: "demo@user.io", password: "password" })
    );
  };




const signUpButton = <NavLink to="/signup" >
            <button id="sign-up-button"> Sign up</button>
            </NavLink>


const loginButton = <NavLink to="/login"><button id="log-in-button" > Login </button></NavLink>
const askAQuestionButton = <NavLink to="/questions/new"><button id="ask-a-question-button" > Ask a question </button></NavLink>
const demoButton =<button id="demo-button" onClick={demoLogin}> Demo user</button>





const logOutButton =  <button id="log-in-button" onClick={handleLogout}> {sessionUser ? "Log out" : "Login" }</button>



    return (
        <div className="header-container">
            <NavLink  exact to= '/' id="logo">Query</NavLink>
            <div id="search-and-sign-in">
                <input type="search" name="searchbar" id="searchbar" placeholder="Enter your question here" />

            </div>
            {sessionUser ? null : demoButton}
            {sessionUser ? null : signUpButton}
            {sessionUser ? askAQuestionButton : null}
            {sessionUser ? logOutButton : loginButton}
    
        </div>
    )
}


export default Navigation;
