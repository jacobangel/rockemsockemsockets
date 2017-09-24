import React from 'react'
import ReactDOM from 'react-dom'
import App, { ADD_MESSAGE, addMessage } from './src/App.jsx';
import { combineReducers, createStore } from 'redux'
import messages from './src/messages';


let store = createStore(combineReducers({ messages }));

let render = () => {
  ReactDOM.render(
    <App 
      store={store} 
    />,
    document.querySelector('#root')
  );
}

render();