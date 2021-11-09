import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as sessionActions from "../../store/session";
import {getQuestionById} from "../../store/currentQuestion"
import './SpecificQuestion.css'

export const SpecificQuestion=() =>{
    const dispatch = useDispatch();
    const {id} = useParams();
    const [isLoaded, setIsLoaded] = useState(false);
    dispatch(getQuestionById(id))
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch])

  useEffect(() => {
    console.log("Here I am!!!")
    dispatch(getQuestionById(id));
  }, [dispatch])
  const currentQuestion = useSelector((state) => state.currentQuestion.question);
  console.log(currentQuestion, "YOOOOOOO")
  const currentAnswers = useSelector((state) => state.currentQuestion.associatedAnswers);

  return(
      <div>
          <li>{currentQuestion.questionTitle}</li>
          <li>{currentQuestion.questionText}</li>
      </div>
  )


}
