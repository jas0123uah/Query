import React, {useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {postAnswer } from "../../store/currentQuestion";
import "./answerForm.css"
function AnswerForm (params){
    const dispatch = useDispatch();
    const existingQuestions = useSelector((state) => state.question);
    const [answerText, setAnswerText] = useState("Enter your answer here.");
    const [errors, setErrors] = useState([]);
    const sessionUser = useSelector(state => state.session.user);
    const userId = sessionUser?.id 
    const questionId = useSelector(state => state.currentQuestion.question.id);
   

    const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    const newAnswer= dispatch(postAnswer({ answerText, questionId, userId}))
    if (newAnswer) {
      window.location.reload();
    }
  };

    return(
        <div id ="container">

        <form action="" onSubmit={handleSubmit}>
            <div className="ansWrap">
              <input type="submit" value="" className=" btn fa-input fas fa-arrow-circle-up fa-2x" />
              <textarea name="answerText" id="newAnswer" cols="30" rows="10" value={answerText}   onChange={(e) => setAnswerText(e.target.value)}>
            </textarea>
            </div>
            
            
            
        </form>
        </div>
    )
};
export default AnswerForm;
