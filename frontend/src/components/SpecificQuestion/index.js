import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import EditFormModal from '../EditQuestionModal'
import {getQuestionById, deleteQuestionById} from "../../store/currentQuestion"
import './SpecificQuestion.css'
import { ShowAnswersForQuestion } from "../ShowAnswersForQuestion/ShowAnswersForQuestion";

export const SpecificQuestion=() =>{
    const dispatch = useDispatch();
    const {id} = useParams();
    const history = useHistory();
    const sessionUser = useSelector((state) => state.session.user);
    const userId = useSelector((state) => state.session?.user?.id);
    const currentQuestion = useSelector((state) => state.currentQuestion);


const handleDelete = (e) => {
    e.preventDefault();
      const deletedQuestion = dispatch(deleteQuestionById(id))
      if (deletedQuestion){
        history.push("/")
      }
};
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
  
  return(
      <div >
        <h1>Question</h1>
        <div className="specific-question">
          <span className="questionTitle">{currentQuestion.question.questionTitle}</span>
          <p className="questionText">{currentQuestion.question.questionText}</p>
          <span class="username">{` Asked by: ${currentQuestion.question.User.username}`}</span>
          <br/>
          {questionBelongsToCurrentUser ? <EditFormModal/> : null}
          {questionBelongsToCurrentUser ? <form onSubmit={handleDelete} className="deleteQuestion">
            <button className="deleteButton added-margin">Delete Question</button>
          </form> : null}
        </div>
          <ShowAnswersForQuestion/>
      </div>
      
  )


}
