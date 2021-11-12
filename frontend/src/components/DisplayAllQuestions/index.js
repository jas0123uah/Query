import React, {useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {getAllQuestions } from "../../store/question";
import './DisplayAllQuestions.css';

export const DisplayAllQuestions = (params) => {
    const dispatch = useDispatch();
    const existingQuestions = useSelector((state) => state.question);
   
    useEffect(() => {
        dispatch(getAllQuestions())
    }, [dispatch])
    return(
        <div>
          {existingQuestions &&  Object.entries(existingQuestions)?.map(subarray =>{
            return(
          <div className="question-container">
            <NavLink className="questionTitle" to={`/questions/${subarray[1].id}`}>{subarray[1].questionTitle}</NavLink>
            <p>
              {subarray[1].questionText}
            </p>
          </div>
          )
          })}

        </div>
    )
};
