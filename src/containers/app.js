import React from 'react';
import {connect} from 'react-redux';
import ChatInput from '../components/ChatInput';
import ChatHistory from '../components/ChatHistory';
import MapView from '../components/MapView';

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

  static propTypes = {
    userName: React.PropTypes.string,
    sendMessage: React.PropTypes.number,
  };


  state = {
    userID: Math.round(Math.random() * 1000000).toString(),
    history: [],
  };


  componentDidMount() {
    this.PubNub = PUBNUB.init({
      publish_key: 'pub-c-a21b783d-ac31-4e63-b4f4-d85df580cb54',
      subscribe_key: 'sub-c-0aaf63fc-c4ca-11e6-90ff-0619f8945a4f',
      // publish_key: 'pub-c-a21b783d-ac31-4e63-b4f4-d85df580cb54',
      // subscribe_key: 'sub-c-0aaf63fc-c4ca-11e6-90ff-0619f8945a4f',
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
        <MapView/>
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
