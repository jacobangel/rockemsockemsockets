import React from 'react'
import ReactDOM from 'react-dom'
import App, { ADD_MESSAGE, addMessage } from './src/App.jsx';
import { combineReducers, createStore } from 'redux'


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
    />,
    document.querySelector('#root')
  );
}

render();