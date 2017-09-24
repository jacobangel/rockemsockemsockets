import client from './src/ws-client';
import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import App, { ADD_MESSAGE, addMessage } from './src/App.jsx';
import { combineReducers } from 'redux'


let store = createStore(combineReducers({
  messages: (state = [], action) => {
    switch(action.type) {
      case 'add_message':
      return [
        ...state,
        action.message
      ]
    }
    return state;
  }
}))

let render = () => {
  ReactDOM.render(
    <App 
      store={store} 
      socket={client((data) => {
        console.log('opew');
        store.dispatch(addMessage(data.data));
      })}
    />,
    document.querySelector('#root')
  );
}

render();