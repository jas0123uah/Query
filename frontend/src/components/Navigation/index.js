// frontend/src/components/Navigation/index.js
import React from 'react';
import {useState} from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as sessionActions from "../../store/session";
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';


function Navigation({ isLoaded }){
const dispatch = useDispatch();
const sessionUser = useSelector((state) => state.session.user);
const [credential, setCredential] = useState("");
const [password, setPassword] = useState("");
    const demoLogin = async () =>{
    setCredential("Demo_User");
    setPassword("password");
    return dispatch(
      sessionActions.login({ credential: "demo@demo.com", password: "password" })
    );
  };
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
            <NavLink to="/login" >
            <button id="log-in-button"> Log in</button>
            </NavLink>
        </div>
    )
}


export default Navigation;
