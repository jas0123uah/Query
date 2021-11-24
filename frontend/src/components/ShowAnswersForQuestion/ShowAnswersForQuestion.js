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
    const userId = useSelector((state) => state.session?.user?.id);
    const currentQuestion = useSelector((state) => state.currentQuestion);
    const currentAnswers = useSelector((state) => state.currentQuestion.associatedAnswers);
    const userAnswer = useSelector((state) => state.currentQuestion.userAnswer)


    useEffect(() => {
      dispatch(getQuestionById(id, userId));
    }, [dispatch])

    if(!currentQuestion.question){
        return null
    }
    let questionBelongsToCurrentUser= false
    if(sessionUser && sessionUser.id == currentQuestion.question.userId){
        questionBelongsToCurrentUser =true
    }
    let answers = Object.values(currentAnswers)
    let usersAnswer = Object.values(userAnswer)

    console.log(usersAnswer[0])
  

  return(
      <div className="answersContainer">
          <h1 className="header-for-answers-container">Answers</h1>
          {usersAnswer.length ? 
          <div>
            <div className="single-answer">
              <p>{usersAnswer[0]?.answerText}</p>
              <p>{`Answer from : ${usersAnswer[0]?.User?.username}`}</p>
              
              

              {sessionUser?.id && usersAnswer && (usersAnswer[0]?.userId == sessionUser?.id ? <DeleteAnswersButton ansId={usersAnswer[0]?.id}></DeleteAnswersButton> :null )}


            
              {usersAnswer[0]?.userId == sessionUser?.id ? <EditAnswerFormModal  initialAnswerText={usersAnswer[0]?.answerText} ansId={usersAnswer[0]?.id}>Edit answer</EditAnswerFormModal> :null}

            </div>
            </div> : null}
          {questionBelongsToCurrentUser ||!sessionUser ||usersAnswer[0]!=null ? null: <AnswerForm/> } 
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
