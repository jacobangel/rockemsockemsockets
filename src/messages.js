export const ADD_MESSAGE = 'ADD_MESSAGE';
export const LOADING = 'LOADING';
export const GET_MESSAGES = 'GET_MESSAGES';

export const addMessage = (message) => {
  return {
    type: ADD_MESSAGE,
    message,
  }
}

export const loadingMessages = () => {
  return {
    type: LOADING,
    isLoading: true,
  }
}

export const getMessages = dispatch => {
  dispatch(loadingMessages())
  fetch('/messages').then(
    (data) => { data.json()
        .then(
          (datum) => dispatch({ type: GET_MESSAGES, messages: datum.messages }),
          (err) => console.warn (err)
        )
     },
    (error) => { console.warn(error); }
  );
}

export default (state = { messages: [], isLoading: false }, action) => {

  switch(action.type) {
    case LOADING: 
    return {
      ...state,
      isLoading: true,
    };

    case ADD_MESSAGE:
    return {
      messages: [
        ...state.messages,
        action.message,
      ],
    }
    
    case GET_MESSAGES: 
    return {
      ...state,
      messages: [
        ...action.messages,
      ],
      isLoading: false,
    }
  }
  return state;
}