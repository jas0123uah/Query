import { csrfFetch } from './csrf';

const ADD_ONE = 'question/ADD_ONE';
const LOAD_ONE= 'question/LOAD_ONE';
const LOAD_ALL ='question/LOAD_ALL';
const DELETE_ONE= 'question/DELETE_ONE';
const addQuestion = (question) => {
  return {
    type: ADD_ONE,
    payload: question,
  };
};


const loadAllQuestions = (list) => {
  return {
  type: LOAD_ALL,
  payload: list,
  }
}


export const getAllQuestions = (question) => async dispatch => {
   const response = await csrfFetch(`/api/questions`)
  if (response.ok) {
        const data = await response.json();
        dispatch(loadAllQuestions(data));
        return data;
    }
}


export const postQuestion = (question) => async dispatch => {
    const response = await csrfFetch('/api/questions', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(question)
    });
    if (response.ok) {
        const data = await response.json();
        dispatch(addQuestion(data));
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
  //     for (const [key, value] of Object.entries(object)) {
  // console.log(key, value);
//}

    default:
      return state;
  }
};

export default questionReducer;
