import { csrfFetch } from './csrf';

const LOAD_ONE= 'question/LOAD_ONE';

const loadSpecificQuestion = (question) => {
  return {
    type: LOAD_ONE,
    payload:question
  }
}
export const getQuestionById = (id) => async dispatch =>{
    console.log("HIIIIIIIIIIIIIII")
  const response = await csrfFetch(`/api/questions/${id}`)
  console.log(response, "<_____________></_____________>")
  if (response.ok) {
    const data = await response.json();
    dispatch(loadSpecificQuestion(data))
    return data;
  }

}

const initialState = {question: null, associatedAnswers:null};

const currentQuestionReducer = (state = initialState, action) => {

  switch (action.type) {
    case LOAD_ONE: 
      
      //const newState = { ...state, [action.payload.question.id]: action.payload.question}
      const newState = { ...state, "question": action.payload.question, associatedAnswers:action.payload.relevantAnswers}
      return newState;
    default:
      return state;
  }
};

export default currentQuestionReducer;
