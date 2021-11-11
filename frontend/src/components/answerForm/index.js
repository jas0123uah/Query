import React, {useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import {postAnswer } from "../../store/currentQuestion";

function AnswerForm (params){
    const dispatch = useDispatch();
    const existingQuestions = useSelector((state) => state.question);
    const [answerText, setAnswerText] = useState("Enter your answer here.");
    const [errors, setErrors] = useState([]);
    const sessionUser = useSelector(state => state.session.user);
    const userId = sessionUser.id
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
        <form action="" onSubmit={handleSubmit}>
            <textarea name="answerText" id="" cols="30" rows="10"  onChange={(e) => setAnswerText(e.target.value)}></textarea>
            <br />
            <button>Submit answer</button>
        </form>
    )
};
export default AnswerForm;
