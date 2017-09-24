function initSocket(cb) {

  const socket = new WebSocket(`ws://${location.host}`);

  socket.onerror = () => {
    console.log('Error')
  }

  socket.onopen = () => {
    console.log('Opened');
  };

  socket.onclose = () => {
    console.log('closed');
  };

  return socket;
}

export default initSocket;