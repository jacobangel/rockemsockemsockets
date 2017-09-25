import React from 'react'
import ReactDOM from 'react-dom'
import App, { ADD_MESSAGE, addMessage } from './src/App.jsx';
import { combineReducers, createStore, applyMiddleware } from 'redux'
import messages from './src/messages';
import thunk from 'redux-thunk';

let store = createStore(combineReducers({ messages }), applyMiddleware(thunk));

let render = () => {
  ReactDOM.render(
    <App 
      store={store} 
    />,
    document.querySelector('#root')
  );
}

render();