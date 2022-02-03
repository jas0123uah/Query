import React, {useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
//import {getAllQuestions } from "../../store/question";

export const DisplaySearchResults = (params) => {
    //const dispatch = useDispatch();
    //const existingQuestions = useSelector((state) => state.question);
    const searchResults = useSelector((state) => state.search);
   
    return(
        <div>
          <h1>Query</h1>
          <h2>Your questions about your world answered</h2>
          <h3 className="homepage-header-3">Queries</h3>
          {searchResults &&  Object.entries(searchResults)?.map(subarray =>{
            return(
          <div className="question-container">
            <NavLink className="questionTitle" to={`/questions/${subarray[1]?.id}`}>{subarray[1]?.questionTitle}</NavLink>
            <p>
              {subarray[1]?.questionText}
            </p>
          <span class="username">{` Asked by: ${subarray[1]?.User?.username}`}</span>
          </div>
          )
          })}

        </div>
    )
};
