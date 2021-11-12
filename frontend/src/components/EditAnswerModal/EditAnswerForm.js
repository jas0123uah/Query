import React, { useState, useEffect } from "react";
import {editAnswerById} from "../../store/currentQuestion"
import { useDispatch, useSelector } from "react-redux";

function EditAnswerForm({initialAnswerText, ansId}) {
  const dispatch = useDispatch();
  const [answerText, setAnswerText] = useState(initialAnswerText);
  const [errors, setErrors] = useState([]);
  const currentQuestion = useSelector((state) => state.currentQuestion);
  const id = useSelector((state) => state.currentQuestion.question.id);


  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    const updatedQ= dispatch(editAnswerById({answerText, ansId })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
    if (updatedQ) {
      window.location.reload();
    }
  };

  if(!currentQuestion.question){
        return null
  }
  
  

  return (
    <form className="entire-edit-form" onSubmit={handleSubmit}>
      <ul>
        {errors.map((error, idx) => (
          <li key={idx}>{error}</li>
        ))}
      </ul>
      <h1 className="edit-answer-label">
        Update your answer
        </h1>
        <br />
        <textarea
          type="text"
          className="update-answer-textarea"
          value={answerText}
          cols="20"
          rows="10"
          onChange={(e) => setAnswerText(e.target.value)}
          required
        />
      <br></br>
      <button type="submit" className="update-answer-button">Update my answer</button>
    </form>
  );
}

export default EditAnswerForm;
