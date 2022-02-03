import { csrfFetch } from './csrf';

const EXECUTE_SEARCH = 'question/EXECUTE_SEARCH';

const search = (searchTerm) => {
  return {
    type: EXECUTE_SEARCH,
    payload: searchTerm,
  };
};

export const runSearch = (searchTerm) => async dispatch => {
   const response = await csrfFetch(`/api/search`, {
   
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(searchTerm)
    }
   )
  if (response.ok) {
        const data = await response.json();
        dispatch(search(data));
        return data;
    }
}




let initialState = null;

const searchReducer = (state = initialState, action) => {

  let newState
  switch (action.type) {
    case EXECUTE_SEARCH:
        newState = action.payload 
        return newState;
    default:
      return state;
  }
};

export default searchReducer;
