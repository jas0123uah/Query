// frontend/src/components/LoginFormModal/LoginForm.js
import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import {editQuestionById} from "../../store/currentQuestion"
import { useDispatch, useSelector } from "react-redux";

function EditQuestionForm() {
  const dispatch = useDispatch();
  const [questionTitle, setQuestionTitle] = useState("");
  const [questionText, setQuestionText] = useState("");
  const [errors, setErrors] = useState([]);
  const currentQuestion = useSelector((state) => state.currentQuestion);


  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(editQuestionById({ questionTitle, questionText })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  if(!currentQuestion.question){
        return null
  }
  setQuestionTitle(currentQuestion.question.questionTitle)

  setQuestionText(currentQuestion.question.questionText)
  

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
