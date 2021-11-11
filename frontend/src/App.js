import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import {NewQuestion} from "./components/NewQuestion/index"
import { DisplayAllQuestions } from "./components/DisplayAllQuestions";
import {SpecificQuestion} from "./components/SpecificQuestion"
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

          <Route path="/github">
          {() =>{window.location.href= "https://github.com/jas0123uah/Query";
          return null}}
          </Route>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/questions/new" exact>
            <NewQuestion/>
          </Route>
          <Route path="/questions/" exact>

          </Route>
          <Route path="/questions/:id" exact>
            <SpecificQuestion/>
          </Route>
        </Switch>
        <Footer></Footer>
        </>
      )}
    </>
  );
}

export default App;
