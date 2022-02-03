// frontend/src/components/Navigation/index.js
import React from 'react';
import {useState} from 'react';
import { NavLink, useHistory  } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import * as sessionActions from "../../store/session";
import LoginFormModal from '../LoginFormModal';
import SignUpFormModal from '../SignUpModal';
import { runSearch } from '../../store/search';
import './Navigation.css';


function Navigation({ isLoaded }){
const dispatch = useDispatch();
const sessionUser = useSelector((state) => state.session.user);
const [credential, setCredential] = useState("");
const [password, setPassword] = useState("");
const [searchTerm, setSearchTerm] = React.useState("");
const [errors, setErrors] = useState([]);
const history = useHistory();
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

const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    const queriedQuestions= dispatch(runSearch({ searchTerm}))
    if (queriedQuestions) {
      history.push("/search/")
      
    }
  };



const signUpButton = <><SignUpFormModal/></>

const loginButton =<> 
<LoginFormModal />
</>

const askAQuestionButton = <NavLink className="askAQuestionButton" to="/questions/new"><button id="ask-a-question-button" > Ask a question </button></NavLink>
const demoButton =<button id="demo-button" onClick={demoLogin}> Demo user</button>


const logOutButton =  <i class="fas fa-sign-out-alt fa-2x" onClick={handleLogout}></i>


    return (
        <div className="header-container">
            <NavLink  exact to= '/' id="logo">Query</NavLink>
            <div id="search-and-sign-in">

              <form className="search-form" onSubmit={handleSubmit}>
                <input  name="searchbar" id="searchbar" placeholder="Enter your question here"
                value={searchTerm} onChange={event => setSearchTerm(event.target.value)}
                />
                <button type="submit" className="search-btn"><i class="fa fa-search"></i></button>
              </form>

            </div>



        
        
            


            {sessionUser ? null : demoButton}
            {sessionUser ? null : signUpButton}
            {sessionUser ? askAQuestionButton : null}
            {sessionUser ? logOutButton : loginButton}


    
        </div>
    )
}


export default Navigation;
