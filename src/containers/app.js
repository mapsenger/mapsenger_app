import React from 'react';
import {connect} from 'react-redux';
import {setCurrentUserID, addMessage, addUser, removeUser, addMarker} from '../action';
import ChatInput from '../components/ChatInput';
import ChatHistory from '../components/ChatHistory';
import ChatUsers from '../components/ChatUsers';
import MapView from '../components/MapView';

const ID = Math.round(Math.random() * 1000000);
const pubnub = PUBNUB.init({
  publish_key: 'pub-c-a21b783d-ac31-4e63-b4f4-d85df580cb54',
  subscribe_key: 'sub-c-0aaf63fc-c4ca-11e6-90ff-0619f8945a4f',
  uuid: ID,
  ssl: (location.protocol.toLowerCase() === 'https:'),
});


function mapStateToProps(state) {
  console.log(state.app.get('markers').toJS());
  return {
    history: state.app.get('messages').toJS(),
    userID: state.app.get('userID'),
    users: state.app.get('users').toJS(),
    markers: state.app.get('markers').toJS(),
    send_marker: state.app.get('send_marker'),
    // usersLocation: state.app.get('usersLocation').toJS(),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addMessage: (message) => dispatch(addMessage(message)),
    setUserID: (userID) => dispatch(setCurrentUserID(userID)),
    addUser: (userID) => dispatch(addUser(userID)),
    removeUser: (userID) => dispatch(removeUser(userID)),
    addMarker: (userData) => dispatch(addMarker(userData)),
    // sendMarker: (marker) => dispatch(sendMarker(marker)),
  };
}

class App extends React.Component {

  static propTypes = {
    markers: React.PropTypes.array,
    history: React.PropTypes.array,
    userID: React.PropTypes.number,
    addMessage: React.PropTypes.func,
    setUserID: React.PropTypes.func,
    users: React.PropTypes.array,
    addUser: React.PropTypes.func,
    removeUser: React.PropTypes.func,
    addMarker: React.PropTypes.func,
    sendMarker: React.PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      active: 'FIRST',
    };
  }

  componentWillMount() {
  }

  componentDidMount() {
    // No geo location here you said?
    this.props.setUserID(ID);
    // pubnub.subscribe({
    //  channel: 'ReactChat',
    //  message: this.props.addMessage,
    //  presence: this.onPresenceChange,
    //  uuid: ID,
    //  state: {
    //    id: ID,
    //    lat: position.coords.latitude,
    //    lng: position.coords.longitude,
    //  },
    // });

    navigator.geolocation.getCurrentPosition((position) => {
      pubnub.subscribe({
        channel: 'ReactChat',
        message: this.props.addMessage,
        presence: this.onPresenceChange,
        state: {
          id: ID,
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        },
      });
    });
    const self = this;
    pubnub.here_now({
      channel: 'ReactChat',
      state: true,
      uuids: true,
      callback: function(response) {
        response.uuids.map((uuid) => {
          self.props.addMarker(uuid.state);
        });
      },
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
    switch (presenceData.action) {
      case 'join':
        // this.props.addUser([presenceData.uuid, presenceData.data.lat, presenceData.data.lng]);
        if (presenceData.data) {
          this.props.addMarker(presenceData.data);
        }
        this.props.addUser(presenceData.uuid);
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
    const {props, sendMessage, state} = this;
    const active = state.active;
    return (
      <div>
        <ChatUsers users={ props.users } current={active} toggleFunction={this.handleClick.bind(this)}/>
        {active === 'FIRST' ? (
          <div>
            <ChatHistory history={ props.history }/>
            <ChatInput userID={ props.userID } sendMessage={ sendMessage }/>
          </div>
        ) : active === 'SECOND' ? (
          <div>
            <MapView markers={ props.markers } userID={ props.userID } sendMarker={ this.sendMarker.bind(this) }/>
          </div>
        ) : null}
      </div>
    );
  }

  sendMarker(marker) {
    console.log(marker);
  }

  handleClick(clickButton) {
    const active = clickButton;
    console.log('handle Click :', active);
    this.setState({
      active: clickButton,
    });
  }

  leaveChat = () => {
    pubnub.unsubscribe({channel: 'ReactChat'});
  };

  sendMessage = (message) => {
    pubnub.publish({
      channel: 'ReactChat',
      message: message,
    });
  };

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
