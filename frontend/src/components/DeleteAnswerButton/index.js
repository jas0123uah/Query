import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {getQuestionById, deleteAnswerById} from "../../store/currentQuestion"


export const DeleteAnswersButton=({ansId}) =>{
    const dispatch = useDispatch();
    const {id} = useParams();
    const sessionUser = useSelector((state) => state.session.user);
    const currentQuestion = useSelector((state) => state.currentQuestion);
    const currentAnswers = useSelector((state) => state.currentQuestion.associatedAnswers);
    const [isLoaded, setIsLoaded] = useState(false);
    const [errors, setErrors] = useState([])


const handleDelete = (e) => {
    e.preventDefault();
      const deletedQuestion = dispatch(deleteAnswerById(ansId))
};
    useEffect(() => {
      dispatch(getQuestionById(id));
    }, [dispatch])

    if(!currentQuestion.question){
        return null
    }


  return(
      <form onSubmit={handleDelete}>
          <button>Delete answer</button>
      </form>
  )


}
