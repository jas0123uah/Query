import { csrfFetch } from './csrf';

const ADD_ONE = 'question/ADD_ONE';
const REMOVE_ONE = 'question/REMOVE_ONE';
const EDIT_ONE = 'question/EDIT_ONE';

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

export const postQuestion = (question) => async dispatch => {
    const response = await csrfFetch('/api/questions');
    if (response.ok) {
        const data = await response.json();
        dispatch(addQuestion(data));
        return data;
    }
  };

// export const restoreUser = () => async dispatch => {
//     const response = await csrfFetch('/api/session');
//     const data = await response.json();
//     dispatch(setUser(data.user));
//     return response;
//   };


//   export const signup = (user) => async (dispatch) => {
//     const { firstName, lastName, username, email, password } = user;
//     const response = await csrfFetch("/api/users", {
//       method: "POST",
//       body: JSON.stringify({
//         username,
//         firstName,
//         lastName,
//         email,
//         password,
//       }),
//     });
//     const data = await response.json();
//     dispatch(setUser(data.user));
//     return response;
//   };

// export const login = (user) => async (dispatch) => {
//   const { credential, password } = user;
//   const response = await csrfFetch('/api/session', {
//     method: 'POST',
//     body: JSON.stringify({
//       credential,
//       password,
//     }),
//   });
//   const data = await response.json();
//   dispatch(setUser(data.user));
//   return response;
// };

// export const logout = () => async (dispatch) => {
//     const response = await csrfFetch('/api/session', {
//       method: 'DELETE',
//     });
//     dispatch(removeUser());
//     return response;
// };

const initialState = { user: null };

// const questionReducer = (state = initialState, action) => {
//   let newState;



//   switch (action.type) {
//     case SET_USER:
//       newState = Object.assign({}, state);
//       newState.user = action.payload;
//       return newState;
//     case REMOVE_USER:
//       newState = Object.assign({}, state);
//       newState.user = null;
//       return newState;
//     default:
//       return state;
//   }
// };

// export default sessionReducer;
