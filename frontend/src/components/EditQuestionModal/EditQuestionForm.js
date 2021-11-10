// frontend/src/components/LoginFormModal/LoginForm.js
import React, { useState, useEffect } from "react";
import * as sessionActions from "../../store/session";
import {editQuestionById} from "../../store/currentQuestion"
import {useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function EditQuestionForm() {
  const dispatch = useDispatch();
   const history = useHistory();
  const [questionTitle, setQuestionTitle] = useState("");
  const [questionText, setQuestionText] = useState("");
  const [errors, setErrors] = useState([]);
  const currentQuestion = useSelector((state) => state.currentQuestion);
  const id = useSelector((state) => state.currentQuestion.question.id);


  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    console.log(currentQuestion, "MODAL")
    console.log(id, "ID MODAL")
    const updatedQ= dispatch(editQuestionById({ questionTitle, questionText, id })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
    if (updatedQ) {
      window.location.reload();
    }
  };

  useEffect(() => {
    setQuestionTitle(currentQuestion.question.questionTitle)

  setQuestionText(currentQuestion.question.questionText)
  }, [currentQuestion.question]);

  if(!currentQuestion.question){
        return null
  }
  
  

  return (
    <form onSubmit={handleSubmit}>
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <label>
        Question Title
        <input
          type="text"
          value={questionTitle}
          onChange={(e) => setQuestionTitle(e.target.value)}
          required
        />
      </label>
      <label>
        Question Description
        <input
          type="text"
          value={questionText}
          onChange={(e) => setQuestionText(e.target.value)}
          required
        />
      </label>
      <button type="submit">Update my question</button>
    </form>
  );
}

export default EditQuestionForm;
