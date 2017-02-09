import React from 'react';
import {connect} from 'react-redux';
import {setCurrentUserID, addMessage, addUser, removeUser, addMarker} from '../action';
import ChatInput from '../components/ChatInput';
import ChatHistory from '../components/ChatHistory';
import ChatUsers from '../components/ChatUsers';
import GoogleMap from '../components/GoogleMap';
import SearchFunction from '../components/SearchFunction';
import SearchCard from '../components/SearchCard';
import SearchNavBar from '../components/SearchNavBar';
import SearchMap from '../components/SearchMap';
import SearchList from '../components/SearchList';
import places from '../components/places';
const consumerKey = 'IwiVdMcfJ68gEJp3N8y4pQ';
const consumerSecret = 'qG5EKwoMK8b2SmvKnKI04TNGjVw';
const token = 'lYLlyWdVd_UM8ZxyKyMOru0WoNbytcMK';
const tokenSecret = 'V5I3DF2WzQ70vqXNmf3gRmzxYSY';

const ID = Math.round(Math.random() * 1000000);
const pubnub = PUBNUB.init({
  publish_key: 'pub-c-a21b783d-ac31-4e63-b4f4-d85df580cb54',
  subscribe_key: 'sub-c-0aaf63fc-c4ca-11e6-90ff-0619f8945a4f',
  uuid: ID,
  ssl: true,
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
      searchBar: '',
      searchedPOI: '',
      mainNav: 'ORIGIN',
      currentLoc: '',
      goToMarker: '',
      fromWhereToMap: '',
    };
  }

  componentWillMount() {
    this.fetchData();
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({
        currentLoc: [position.coords.latitude, position.coords.longitude]
      });
    });
  }

  componentDidMount() {
    console.log(this.state.searchedPOI);
    // No geo location here you said?
    this.props.setUserID(ID);
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
        console.log(response);
        response.uuids.map((uuid) => {
          self.props.addMarker(uuid.state);
        });
      },
    });
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

  //  Toggle Nav Bar
  onToggleNav(dat) {
    console.log(dat);
    this.setState({
      mainNav: dat,
      active: 'SEARCH',
    });
  }

  getText(infoSearch) {
     const url = '/yelp' + '&query=' + infoSearch + '+Seattle+University+District&location=47.658350, -122.313782&radius=3000';
     fetch(url, {method: 'GET'}).then(function(response) {
     return response.json();
     }).then(json => {
     this.setState({
      searchedPOI: json.results,
       searchBar: infoSearch,
       active: 'SEARCH_ENTER'
     });
     }).catch(function(error) {
     console.log('Error:', error);
     });
    console.log(infoSearch);
  //  this.setState({
  //    searchBar: infoSearch,
  //    active: 'SEARCH_ENTER'
  // });
  }

  getMarker(marker) {
    console.log(marker);
     this.setState({
      goToMarker: marker,
      fromWhereToMap: 'marker',
       active: 'SECOND'
     });
  }


  render() {
    const {props, sendMessage, state} = this;
    const active = state.active;
    const mainNav = state.mainNav;
    const searchPOI = state.searchBar;
    return (
      <div>
        {mainNav === 'ORIGIN' ? (
          <ChatUsers users={ props.users }
                     focusModal={this.onToggleNav.bind(this)}
                     currentPage={active}
                     toggleFunction={this.handleClick.bind(this)}
          />
        ) : mainNav === 'DESTINATION' ? (
          <SearchNavBar users={ props.users }
                     backButton={this.goBackButton.bind(this)}
                     searchText={this.getText.bind(this)}
                     focusModal={this.openModal.bind(this)}
                     toggleFunction={this.handleClick.bind(this)}
          />
        ) : null}
        {active === 'FIRST' ? (
          <div>
            <ChatHistory
              history={ props.history }
              getMarker={this.getMarker.bind(this)}
            />
            <ChatInput userID={ props.userID } sendMessage={ sendMessage }/>
          </div>
        ) : active === 'SECOND' ? (
          <div>
            <GoogleMap
              markers={ props.markers }
              userID={ props.userID }
              sendMarker={ this.sendMarker.bind(this) }
              allPOI={props.history}
              fromWHere={state.fromWhereToMap}
              markerFromHistory={state.goToMarker}
            />
          </div>
        ) : active === 'SEARCH' ? (
          <div>
            <SearchFunction
              searchText={this.getText.bind(this)}
            />
          </div>
        )
          : active === 'SEARCH_ENTER' ? (
          <div>
            <SearchList
              textSearch={searchPOI}
              POI={state.searchedPOI}
              sendMessage={ sendMessage }
              userID={ props.userID }
            />
          </div>
        )
          : active === 'SEARCH_MAP' ? (
          <div>
            <SearchMap
              markers={ props.markers }
              POI={state.searchedPOI}
              userID={ props.userID }
              currentLoc={state.currentLoc}
              sendMessage={ sendMessage }
              sendMarker={ this.sendMarker.bind(this)
              }
            />
          </div>
        )
          : null}
      </div>
    );
  }

  fetchData() {
       // this.setState({
       // searchedPOI: places.thai,
       // });
      // const url = '/yelp' + '&query=thai+restaurant+Seattle+University+District&location=47.658350, -122.313782&radius=3000';
      // fetch(url, {method: 'GET'}).then(function(response) {
      // return response.json();
      // }).then(json => {
      // this.setState({
      //  searchedPOI: json.results,
      // });
      // }).catch(function(error) {
      // console.log('Error:', error);
      // });
  }

  sendMarker(marker) {
    console.log(marker);
  }

  handleClick() {
    const active = this.state.active;
    console.log('handle toggle', active);
    // Switch case here
    let newActive;
    switch (active) {
      case 'FIRST': // foo is 0 so criteria met here so this block will run
        newActive = 'SECOND';
        break;
      case 'SECOND': // no break statement in 'case 0:' so this case will run as well
        newActive = 'FIRST';
        break; // it encounters this break so will not continue into 'case 2:'
      case 'SEARCH_ENTER':
        console.log('ok search enter');
        newActive = 'SEARCH_MAP';
        break;
      case 'SEARCH_MAP':
        newActive = 'SEARCH_ENTER';
        break;
      default:
        console.log('default');
        newActive = 'SECOND';
    }
    this.setState({
      active: newActive,
      fromWhereToMap: 'main'
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

//  For Modals
  openModal(dat) {
    console.log(dat);
    this.setState({active: dat});
  }
  //  Toggle Nav Bar
  goBackButton() {
    console.log();
    this.setState(
      {mainNav: 'ORIGIN',
        active: 'FIRST'}
    );
  }

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
