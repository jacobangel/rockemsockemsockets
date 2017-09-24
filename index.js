import client from './src/ws-client';
const addLi = (message) => {
  const li = document.createElement('li');
  li.innerHTML = message;
  document.querySelector('ul').appendChild(li);
}

const ws = client();

ws.onmessage = (data) => {
  console.log(data);
  addLi(data.data);
};

const button = document.querySelector('button').addEventListener('click', ()=> {
  const value = document.querySelector('input').value;
  console.log(value);
  addLi(value);
  ws.send(value);
}, false);