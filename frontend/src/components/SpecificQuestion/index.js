import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import * as sessionActions from "../../store/session";
import EditFormModal from '../EditQuestionModal'
import EditAnswerFormModal from '../EditAnswerModal'
import {getQuestionById, deleteQuestionById} from "../../store/currentQuestion"
import AnswerForm from "../answerForm";
import './SpecificQuestion.css'
import { ShowAnswersForQuestion } from "../ShowAnswersForQuestion/ShowAnswersForQuestion";

export const SpecificQuestion=() =>{
    const dispatch = useDispatch();
    const {id} = useParams();
    const history = useHistory();
    const sessionUser = useSelector((state) => state.session.user);
    const currentQuestion = useSelector((state) => state.currentQuestion);
    const currentAnswers = useSelector((state) => state.currentQuestion.associatedAnswers);
    const [isLoaded, setIsLoaded] = useState(false);
    const [errors, setErrors] = useState([])


const handleDelete = (e) => {
    e.preventDefault();
      const deletedQuestion = dispatch(deleteQuestionById(id))
      if (deletedQuestion){
        history.push("/")
      }
};
    useEffect(() => {
      dispatch(getQuestionById(id));
    }, [dispatch])

    if(!currentQuestion.question){
        return null
    }
    let questionBelongsToCurrentUser= false
    if(sessionUser && sessionUser.id == currentQuestion.question.userId){
        questionBelongsToCurrentUser =true
    }

  return(
      <div >
        <h1>Question</h1>
        <div className="specific-question">
          <span className="questionTitle">{currentQuestion.question.questionTitle}</span>
          <p className="questionText">{currentQuestion.question.questionText}</p>
          {questionBelongsToCurrentUser ? <EditFormModal/> : null}
          {questionBelongsToCurrentUser ? <form onSubmit={handleDelete} className="deleteQuestion">
            <button className="deleteButton added-margin">Delete Question</button>
          </form> : null}
        </div>
          <ShowAnswersForQuestion/>
      </div>
      
  )


}
