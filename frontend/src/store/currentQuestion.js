import { csrfFetch } from './csrf';

const LOAD_ONE= 'question/LOAD_ONE';

const EDIT_ONE= 'question/EDIT_ONE';


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
  console.log("THUNK", answerText);
    const response = await csrfFetch('/api/answers', {
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



const deleteAnswer = (question) => {
  return {
    type: DELETE_ONE_ANSWER,
    payload: question,
  };
};



export const deleteAnswerById = (id) => async dispatch =>{
  console.log("AHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH")
  const response = await csrfFetch(`/api/answers/${id}`, {
      method: 'DELETE',
    })
  if (response.ok) {
    const data = await response.json();
    dispatch(deleteAnswer(data))
    return data;
  }

}





const editSpecificAnswer = (newData) => {
  return {
    type: EDIT_ONE_ANSWER,
    payload:newData
  }
}
export const editAnswerById = (answer) => async dispatch =>{
  const {answerText, ansId } = answer;
  console.log(`Thunkkkkkkkkkkkkk ${ansId}`)
  const response = await csrfFetch(`/api/answers/${ansId}`, {
      method: 'PUT',
      body: JSON.stringify({
        ansId,
        answerText,
      }),
    })
  if (response.ok) {
    const data = await response.json();
    dispatch(editSpecificAnswer(data))
    return data;
  }

}




































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
    case ADD_ONE_ANSWER:
      newState = { ...state}
      newState.associatedAnswers[action.payload.newAnswer.id]=action.payload.newAnswer
      return newState
    
    case DELETE_ONE_ANSWER:
      newState = { ...state}
      console.log(action.payload, "LOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO")
      delete newState.associatedAnswers[action.payload]
      return newState
    
    case EDIT_ONE_ANSWER:
      newState = { ...state}
      console.log(action.payload, "EDITONE_ANSWER")
      return newState



    
    case LOAD_ONE:
      console.log(action.payload.relevantAnswers, "<-------")
      
      newState = { ...state, "question": action.payload.question, associatedAnswers:{}}
      let i =0;
      while (i < action.payload.relevantAnswers.length){
        const relevantAns = action.payload.relevantAnswers[i];
        console.log(i, "iii")
        console.log(relevantAns);
        newState.associatedAnswers[relevantAns.id] = relevantAns
        i++ 
      }
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
