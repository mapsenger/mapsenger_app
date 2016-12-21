import React from 'react';
import {connect} from 'react-redux';
import ChatInput from '../components/ChatInput';
import ChatHistory from '../components/ChatHistory';

function mapStateToProps(/* state */) {
  return {
    // TODO: Add state to be mapped to props
  };
}

function mapDispatchToProps(/* dispatch */) {
  return {
    // TODO: Add actions to be mapped to props
  };
}

class App extends React.Component {

  state = {
    userID: Math.round(Math.random() * 1000000).toString(),
    history: [],
  };


  componentDidMount() {
    this.PubNub = PUBNUB.init({
      publish_key: '',
      subscribe_key: '',
      ssl: (location.protocol.toLowerCase() === 'https:'),
    });
    this.PubNub.subscribe({
      channel: 'ReactChat',
      message: (message) => this.setState({
        history: this.state.history.concat(message),
      }),
    });
  }

  render() {
    const {sendMessage, state} = this;
    return (
      <div>
        <ChatHistory history={ state.history }/>
        <ChatInput userID={ state.userID } sendMessage={ sendMessage }/>
      </div>
    );
  }

  sendMessage = (message) => {
    this.PubNub.publish({
      channel: 'ReactChat',
      message: message,
    });
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
