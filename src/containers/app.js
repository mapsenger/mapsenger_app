import React from 'react';
import {connect} from 'react-redux';
import {setCurrentUserID, addMessage, addUser, removeUser} from '../action';
import ChatInput from '../components/ChatInput';
import ChatHistory from '../components/ChatHistory';
import ChatUsers from '../components/ChatUsers';
import AllShapes from '../components/MapView';

function mapStateToProps(state) {
  console.log(state.app.get('users').toJS());
  return {
    history: state.app.get('messages').toJS(),
    userID: state.app.get('userID'),
    users: state.app.get('users').toJS(),
    // usersLocation: state.app.get('usersLocation').toJS(),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addMessage: (message) => dispatch(addMessage(message)),
    setUserID: (userID) => dispatch(setCurrentUserID(userID)),
    addUser: (userID) => dispatch(addUser(userID)),
    removeUser: (userID) => dispatch(removeUser(userID)),
  };
}

class App extends React.Component {

  static propTypes = {
    history: React.PropTypes.array,
    userID: React.PropTypes.number,
    addMessage: React.PropTypes.func,
    setUserID: React.PropTypes.func,
    users: React.PropTypes.array,
    addUser: React.PropTypes.func,
    removeUser: React.PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      lat: '',
      lng: '',
    };
  }

  componentWillMount() {
  }

  componentDidMount() {
    console.log(this.state.lat);
    const ID = Math.round(Math.random() * 1000000);
    this.props.setUserID(ID);
    this.PubNub = PUBNUB.init({
      publish_key: 'pub-c-58ff4ec1-ecb8-43d0-8d37-6bf092817234',
      subscribe_key: 'sub-c-d92f9bda-c4c9-11e6-b2ab-0619f8945a4f',
      uuid: ID,
      state: {
        lat: this.state.lat,
        lng: this.state.lng,
      },
      ssl: (location.protocol.toLowerCase() === 'https:'),
    });
    navigator.geolocation.watchPosition((position) => {
      this.PubNub.subscribe({
        channel: 'ReactChat',
        message: this.props.addMessage,
        presence: this.onPresenceChange,
        uuid: ID,
        state: {
          id: ID,
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        },
      });
    });
    // this.PubNub.subscribe({
    //   channel: 'ReactChat',
    //   message: this.props.addMessage,
    //   presence: this.onPresenceChange,
    //   state: {
    //     location: userLoc,
    //   },
    // });
    window.addEventListener('beforeunload', this.leaveChat);
  }

  componentWillUnmount() {
    this.leaveChat();
  }

  onPresenceChange = (presenceData) => {
    console.log(presenceData);
    switch (presenceData.action) {
      case 'join':
        this.props.addUser([presenceData.uuid, presenceData.data.lat, presenceData.data.lng]);
        break;
      case 'leave':
        this.props.removeUser(presenceData.uuid);
        break;
      case 'timeout':
        this.props.removeUser(presenceData.uuid);
        break;
      default:
        console.error('unknown action: ' + presenceData.action);
    }
  }

  render() {
    const {props, sendMessage} = this;
    return (
      <div>
        <ChatUsers users={ props.users }/>
        <AllShapes/>
        <ChatHistory history={ props.history }/>
        <ChatInput userID={ props.userID } sendMessage={ sendMessage }/>
      </div>
    );
  }

  leaveChat = () => {
    this.PubNub.unsubscribe({channel: 'ReactChat'});
  };

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
