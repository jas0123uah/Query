import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import {NewQuestion} from "./components/NewQuestion/index"
import { DisplayAllQuestions } from "./components/DisplayAllQuestions";
import {SpecificQuestion} from "./components/SpecificQuestion";
import {DisplaySearchResults} from './components/DisplaySearchResults'
import Footer from "./components/Footer"

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      {isLoaded && (
        <>
        <Navigation isLoaded={isLoaded} />
        <Switch>
          <Route path="/" exact>
            
            <DisplayAllQuestions/>
            
          </Route>

          <Route path="/search" exact>
            <DisplaySearchResults/>
            
            
          </Route>

          <Route path="/githubSourceCode">
          {() =>{window.location.href= "https://github.com/jas0123uah/Query";
          return null}}
          </Route>
          <Route path="/linkedInProfile">
          {() =>{window.location.href= "https://www.linkedin.com/in/jay-spencer-621b44166";
          return null}}
          </Route>
          <Route path="/email">
          {() =>{window.location.href= "mailto:jas0123@uah.edu";
          return null}}
          </Route>
          <Route path="/githubProfile">
          {() =>{window.location.href= "https://github.com/jas0123uah";
          return null}}
          </Route>
        
          
          <Route path="/questions/new" exact>
            <NewQuestion/>
          </Route>
          
          <Route path="/questions/:id" exact>
            <SpecificQuestion/>
          </Route>
          <Route>
            <h1>Page Not Found</h1>
          </Route>
        </Switch>
        
        </>
      )}
    </>
  );
}

export default App;
