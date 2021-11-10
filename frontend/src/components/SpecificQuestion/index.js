import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import * as sessionActions from "../../store/session";
import EditFormModal from '../EditQuestionModal'
import {getQuestionById, deleteQuestionById} from "../../store/currentQuestion"
import './SpecificQuestion.css'

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
      <div>
          <li>{currentQuestion.question.questionTitle}</li>
          <li>{currentQuestion.question.questionText}</li>
          {questionBelongsToCurrentUser ? <EditFormModal/> : null}
          {questionBelongsToCurrentUser ? <form onSubmit={handleDelete}>
            <button>Delete Question</button>
          </form> : null}
      </div>
      
  )


}
