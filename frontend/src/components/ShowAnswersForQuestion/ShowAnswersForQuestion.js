import React, {useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {getQuestionById} from "../../store/currentQuestion"
import AnswerForm from "../answerForm";
import { DeleteAnswersButton } from "../DeleteAnswerButton";
import EditAnswerFormModal from '../EditAnswerModal'
import './ShowAnswersForQuestion.css'

export const ShowAnswersForQuestion=() =>{
    const dispatch = useDispatch();
    const {id} = useParams();
    const sessionUser = useSelector((state) => state.session.user);
    const currentQuestion = useSelector((state) => state.currentQuestion);
    const currentAnswers = useSelector((state) => state.currentQuestion.associatedAnswers);


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
    let answers = Object.values(currentAnswers)

  return(
      <div className="answersContainer">
          <h1 className="header-for-answers-container">Answers</h1>
          {questionBelongsToCurrentUser ||!sessionUser ? null: <AnswerForm/> }
          {answers.length ? answers.map( answer => 
      
          <div>
            <div className="single-answer">
              <p>{answer?.answerText}</p>
              <p>{`Answer from : ${answer?.User?.username}`}</p>
              
              

              {sessionUser?.id && answer && (answer?.userId == sessionUser?.id ? <DeleteAnswersButton ansId={answer?.id}></DeleteAnswersButton> :null )}


            
              {answer?.userId == sessionUser?.id ? <EditAnswerFormModal  initialAnswerText={answer?.answerText} ansId={answer?.id}>Edit answer</EditAnswerFormModal> :null}

            </div>
            </div>) 
            : <h3>No Answers Yet</h3>}
      </div>
      
  )


}
