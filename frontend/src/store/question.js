import { csrfFetch } from './csrf';

const ADD_ONE = 'question/ADD_ONE';
const REMOVE_ONE = 'question/REMOVE_ONE';
const EDIT_ONE = 'question/EDIT_ONE';
const LOAD_NEW ='question/LOAD_NEW';
const LOAD_ALL ='question/LOAD_ALL';

const addQuestion = (question) => {
  return {
    type: ADD_ONE,
    payload: question,
  };
};

const removeQuestion = (question) => {
  return {
    type: REMOVE_ONE,
    payload: question,
  };
};

const editQuestion = (question) => {
  return {
    type: EDIT_ONE,
    payload: question,
  };
};

const loadAllQuestions = (list) => {
  return {
  type: LOAD_ALL,
  payload: list,
  }
}

const loadNewQuestion = (newQuestion) => {
  return {
  type: LOAD_NEW,
  payload: newQuestion,
  }
}

export const getLatestQuestion = (question) => async dispatch => {
  const response = await csrfFetch(`/api/questions/${question.id}`, {
    headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(question)
  })
  if (response.ok) {
        const data = await response.json();
        dispatch(loadNewQuestion(data));
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


const initialState = {};

const questionReducer = (state = initialState, action) => {

  switch (action.type) {
      case ADD_ONE: 
      
      const newState = { ...state, [action.payload.question.id]: action.payload.question}
      return newState;
      
     
    
    
    default:
      return state;
  }
};

export default questionReducer;
