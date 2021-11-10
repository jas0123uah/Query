import { csrfFetch } from './csrf';

const ADD_ONE_ANSWER = 'answer/ADD_ONE';
const EDIT_ONE_ANSWER = 'answer/EDIT_ONE'
const DELETE_ONE_ANSWER= 'answer/DELETE_ONE';
const addAnswer = (question) => {
  return {
    type: ADD_ONE_ANSWER,
    payload: question,
  };
};






export const postAnswer = (answerText) => async dispatch => {
    const response = await csrfFetch('/api/questions', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(answerText)
    });
    if (response.ok) {
        const data = await response.json();
        dispatch(addAnswer(data));
        return data;
    }
  };


let initialState = null;

const questionReducer = (state = initialState, action) => {

  let newState
  switch (action.type) {
    case ADD_ONE: 
      
      newState = { ...state, [action.payload.question.id]: action.payload.question}
      return newState;
    case LOAD_ALL:
      const allState ={}
      action.payload.forEach(question => {
        allState[question.id]=question;
      })
      return allState
    case DELETE_ONE:
      newState = {...state}
      delete newState[action.payload]
      return newState

    default:
      return state;
  }
};

export default questionReducer;
