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
    let answers = Object.values(currentAnswers)
    console.log(answers, "<----- LOOK its answer!!!!!!!!")

  return(
      <div className="answersContainer">
          <h1 className="header-for-answers-container">Answers</h1>
          {questionBelongsToCurrentUser ? null: <AnswerForm/> }
          {answers.length ? answers.map( answer => 
      
          <div>
            <div className="single-answer">
              <p>{answer?.answerText}</p>
              <p>{`Answer from User: ${answer?.userId}`}</p>
              
              
              {/* {SessionUser && ({answer[1].userId == sessionUser.id ? <DeleteAnswersButton ansId={answer[1].id}></DeleteAnswersButton> :null} )} */}

              {sessionUser?.id && answer && (answer?.userId == sessionUser?.id ? <DeleteAnswersButton ansId={answer?.id}></DeleteAnswersButton> :null )}


              {/* {answer[1].userId == sessionUser.id ? <DeleteAnswersButton ansId={answer[1].id}></DeleteAnswersButton> :null} */}

              {answer?.userId == sessionUser?.id ? <EditAnswerFormModal  initialAnswerText={answer?.answerText} ansId={answer?.id}>Edit answer</EditAnswerFormModal> :null}

            </div>
            </div>) 
            : <h3>No Answers Yet</h3>}
      </div>
      
  )


}
