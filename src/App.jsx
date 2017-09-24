import React from 'react';
import { connect } from 'react-redux';
import client from './ws-client';

class App extends React.Component {
  constructor() {
    super();
    this.sendMessage = this.sendMessage.bind(this);
  }

  componentDidMount() {
    if (!this.socket) {
      this.socket = client(this.props.onSendClick);
    }
  }

  componentWillUnmount() {
    if (this.socket) {
      this.socket.close();
      this.socket = null;
    }
  }

  sendMessage(e) {
    console.log('sup', this.text.value);
    this.socket.send(this.text.value);
    this.props.onSendClick(this.text.value);
  }

  render() {
    return (
      <div>
        <div>
          <input type="text" ref={el => { this.text = el }} />
          <button onClick={this.sendMessage}>Send Message!!</button>
        </div>
        <div>
          <h2>Messages</h2>
          <ul>
            {
              this.props.messages.map((message, i) => {
                return <li key={message+i}>{message}</li>
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

export const ADD_MESSAGE = 'add_message';

export const addMessage = (message) => {
  return {
    type: ADD_MESSAGE,
    message,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onSendClick: message => { 
      dispatch(addMessage(message))
    },
  }
};

const getResponses = responses => ([... responses]);

const mapStateToProps = state => {
  console.log(state);
  return {
    messages: getResponses(state.messages)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);