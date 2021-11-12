import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { postQuestion } from "../../store/question";
import { useHistory } from "react-router-dom";
import './NewQuestion.css'
export const NewQuestion = (params) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user);
    const [questionTitle, setQuestionTitle] = useState("");
    const [questionText, setQuestionText] = useState("");
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
    e.preventDefault();

      if (questionTitle.length >285) {
          setErrors(["The questions title cannot be greater than 285 characters."])
      }
      if (questionText.length > 2000) {
          setErrors([...errors, "The questions text cannot be more than than 2000 characters."])
      }
      if (!errors.length) {
        const newQuestion={questionTitle, questionText,userId:sessionUser.id}
        const generatedQuestion = dispatch(postQuestion(newQuestion))
        if (generatedQuestion){
          history.push("/")
        }
        return generatedQuestion
        
      }
    }
    
  if (!sessionUser) return <Redirect to="/login" />;
    return(
        <div className="newQuestionForm">
            <form onSubmit={handleSubmit} id="new-question-form">
          <h1>Query</h1>
          <h2>Your questions about your world answered</h2>
          <ul>
            {errors.map((error, idx) => <li key={idx}>{error}</li>)}
          </ul>
          <label className="newQuestionLabel">
            Question Title
            <input className="newQuestionInput"
              type="text"
              value={questionTitle}
              onChange={(e) => setQuestionTitle(e.target.value)}
              name="questionTitle"
              placeholder="Enter your question here."
              required
            />
          </label>
          <label className="newQuestionLabel">
            Description
            <textarea
              className="newQuestionInput"
              cols="30" 
              rows="10"
              type="text"
              value={questionText}
              onChange={(e) => setQuestionText(e.target.value)}
              placeholder="Please describe your question in detail."
              name="questionText"
              required
            />
          </label>
          
          <button type="submit" className="newQuestionButton" id="signup">Submit question</button>
        </form>
        </div>
    )
};
