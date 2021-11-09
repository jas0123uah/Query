import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, NavLink } from "react-router-dom";
import { postQuestion, getAllQuestions } from "../../store/question";
import { useHistory } from "react-router-dom";
//import * as questionActions from "../../store/question";
export const DisplayAllQuestions = (params) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const existingQuestions = useSelector((state) => state.question);
    //console.log(state, "<<----STATE")
    console.log("YAYYYYYYYYYYYYYYYYYYYYYYYYY")
    console.log("ihhggijgjgjuytryiurtiytr")
    //const existingQuestionsArray = Object.entries(existingQuestions)
    const [questionTitle, setQuestionTitle] = useState("");
    const [questionText, setQuestionText] = useState("");
    const [errors, setErrors] = useState([]);
    ///
    //console.log(existingQuestionsArray)
    console.log(existingQuestions)
    console.log(sessionUser, "<---- sessionUser")
    useEffect(() => {
        dispatch(getAllQuestions())
    }, [dispatch])
    return(
        <div>
          {existingQuestions &&  Object.entries(existingQuestions)?.map(subarray =>{
            return(
          <div>
            <NavLink to={`/questions/${subarray[1].id}`}>{subarray[1].questionTitle}</NavLink>
          </div>)
          })}

        </div>
    )
};
