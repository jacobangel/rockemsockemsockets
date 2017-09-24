function getSocket({
  onOpen = () => { console.log('opened'); },
  onError = () => { console.log('errored'); },
  onClose = () => { console.log('close'); },
  onMessage = () => { console.log('on message') }
} = {}) {

  const socket = new WebSocket(`ws://${location.host}/index`);
  socket.onopen = onOpen;
  socket.onclose = onClose;
  socket.onerror = onError;
  socket.onmessage = onMessage;
  return socket;
}

export default getSocket;