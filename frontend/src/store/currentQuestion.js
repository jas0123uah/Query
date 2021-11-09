import { csrfFetch } from './csrf';

const LOAD_ONE= 'question/LOAD_ONE';

const loadSpecificQuestion = (question) => {
  return {
    type: LOAD_ONE,
    payload:question
  }
}
export const getQuestionById = (id) => async dispatch =>{
  const response = await csrfFetch(`/api/questions/${id}`)
  if (response.ok) {
    const data = await response.json();
    dispatch(loadSpecificQuestion(data))
    return data;
  }

}


const DELETE_ONE= 'question/DELETE_ONE';

const deleteSpecificQuestion = (id) => {
  return {
    type: DELETE_ONE,
    payload:id
  }
}
export const deleteQuestionById = (id) => async dispatch =>{
  console.log("THUNK")
  const response = await csrfFetch(`/api/questions/${id}`, {
      method: 'DELETE',
    })
  console.log(response, "<----")
  if (response.ok) {
    const data = await response.json();
    dispatch(deleteSpecificQuestion(data))
    return data;
  }

}




const initialState = {question: null, associatedAnswers:null};

const currentQuestionReducer = (state = initialState, action) => {
  let newState

  switch (action.type) {
    case LOAD_ONE: 
      
      //const newState = { ...state, [action.payload.question.id]: action.payload.question}
      newState = { ...state, "question": action.payload.question, associatedAnswers:action.payload.relevantAnswers}
      return newState;
    case DELETE_ONE:
        newState ={question:null, associatedAnswers:null}
        return newState
    default:
      return state;
  }
};

export default currentQuestionReducer;
