import { csrfFetch } from './csrf';

const LOAD_ONE= 'question/LOAD_ONE';

const EDIT_ONE= 'question/EDIT_ONE';

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
  const response = await csrfFetch(`/api/questions/${id}`, {
      method: 'DELETE',
    })
  if (response.ok) {
    const data = await response.json();
    dispatch(deleteSpecificQuestion(data))
    return data;
  }

}




const editSpecificQuestion = (newData) => {
  return {
    type: EDIT_ONE,
    payload:newData
  }
}
export const editQuestionById = (question) => async dispatch =>{
  const { questionTitle, questionText, id } = question;
  const response = await csrfFetch(`/api/questions/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        questionTitle,
        questionText,
      }),
    })
  if (response.ok) {
    const data = await response.json();
    dispatch(editSpecificQuestion(data))
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
    case EDIT_ONE:
      newState = { ...state, "question": action.payload.question}
      return newState

    default:
      return state;
  }
};

export default currentQuestionReducer;
