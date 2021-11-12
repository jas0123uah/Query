import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import * as sessionActions from "../../store/session";
import EditFormModal from '../EditQuestionModal'
import {getQuestionById, deleteQuestionById} from "../../store/currentQuestion"
import AnswerForm from "../answerForm";
import { DeleteAnswersButton } from "../DeleteAnswerButton";
import EditAnswerFormModal from '../EditAnswerModal'
import './ShowAnswersForQuestion.css'

export const ShowAnswersForQuestion=() =>{
    const dispatch = useDispatch();
    const {id} = useParams();
    const history = useHistory();
    const sessionUser = useSelector((state) => state.session.user);
    const currentQuestion = useSelector((state) => state.currentQuestion);
    const currentAnswers = useSelector((state) => state.currentQuestion.associatedAnswers);
    console.log(currentAnswers, "<------------AHHHHHHHHHHHHHHHHHHHHHHHHHHHHH")
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
      <div className="answersContainer">
          <h1 className="header-for-answers-container">Answers</h1>
          {questionBelongsToCurrentUser ? null: <AnswerForm/> }
          {Object.keys(currentAnswers).length ? Object.entries(currentAnswers).map( answer => 
      
          <div>
            <div className="single-answer">
              <p>{answer[1]?.answerText}</p>
              <p>{`Answer from User: ${answer[1]?.userId}`}</p>
              {answer[1].userId == sessionUser.id ? <DeleteAnswersButton ansId={answer[1].id}></DeleteAnswersButton> :null}
              {answer[1].userId == sessionUser.id ? <EditAnswerFormModal  initialAnswerText={answer[1].answerText} ansId={answer[1].id}>Edit answer</EditAnswerFormModal> :null}

            </div>
            </div>) 
            : <h3>No Answers Yet</h3>}
      </div>
      
  )


}
