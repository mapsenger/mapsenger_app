import React from 'react';
import {connect} from 'react-redux';
import {setCurrentUserID, addMessage, addUser, removeUser, addMarker} from '../action';
import ChatInput from '../components/ChatInput';
import ChatHistory from '../components/ChatHistory';
import ChatUsers from '../components/ChatUsers';
import GoogleMap from '../components/googleMap';
import SearchFunction from '../components/SearchFunction';
import SearchCard from '../components/SearchCard';
import SearchNavBar from '../components/SearchNavBar';
import SearchMap from '../components/SearchMap';
import SearchList from '../components/SearchList';
import places from '../components/places';
const Spinner = require('react-spinkit');


const ID = Math.round(Math.random() * 1000000);
const pubnub = PUBNUB.init({
  publish_key: 'pub-c-ec19e776-9092-4b9c-af3c-1d9528bdfcd8',
  subscribe_key: 'sub-c-65b524aa-ee99-11e6-a5f4-02ee2ddab7fe',
  uuid: ID,
  ssl: true, // encrypt the channel
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
      userLoading: false,
      active: 'FIRST',
      searchBar: '',
      searchedPOI: '',
      mainNav: 'ORIGIN',
      currentLoc: '',
      goToMarker: '',
      fromWhereToMap: '',
      newMessage: '',
      previousPage: '',
      forMapAnimation: false
    };
  }

  componentWillMount() {
    this.fetchData();
    this.setState({
      currentLoc: [47.6553, -122.3035]
    });
  }

  componentDidMount() {
    console.log('did mount', this.props.history);
    // No geo location here you said?
    this.props.setUserID(ID);
     // pubnub.subscribe({
     // channel: 'ReactChat',
     // message: this.props.addMessage,
     // presence: this.onPresenceChange,
     // state: {
     //   id: ID,
     //   lat: 47.6553,
     //   lng: -122.3035,
     // }
     // });

     navigator.geolocation.getCurrentPosition((position) => {
      pubnub.subscribe({
        channel: 'ReactChat',
        message: this.props.addMessage,
        presence: this.onPresenceChange,
        state: {
          id: ID,
          lat: position.coords.latitude,
          lng: position.coords.longitude
        },
      });
     });

    const self = this;
    pubnub.here_now({
      channel: 'ReactChat',
      state: true,
      uuids: true,
      callback: function (response) {
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

  componentDidUpdate() {
    console.log('will receive prop', this.props.history);
    if (this.props.history.length > 0) {
      if (this.props.history.slice(-1)[0].Type === 'message' && this.props.history.slice(-1)[0].What !== this.state.newMessage) {
        this.setState({
          newMessage: this.props.history.slice(-1)[0].What
        });
      }
    }
  }

  onPresenceChange = (presenceData) => {
    switch (presenceData.action) {
      case 'join':
        // this.props.addUser([presenceData.uuid, presenceData.data.lat, presenceData.data.lng]);
        if (presenceData.data) {
          this.props.addMarker(presenceData.data);
          this.setState({
            userLoading: true
          });
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
  };

  //  Toggle Nav Bar
  onToggleNav(dat) {
    console.log(dat);
    this.setState({
      mainNav: dat,
      active: 'SEARCH',
    });
  }

  getText(infoSearch) {
    const lat = this.state.currentLoc[0];
    const lng = this.state.currentLoc[1];
    // this.setState({
    // searchBar: infoSearch,
    // active: 'SEARCH_ENTER',
    // searchedPOI: places.thai
    // });
    // const url = '/yelp' + '&query=' + infoSearch + '+Seattle+University+District&location=' + lat + "," + lng + '&radius=3000';
    const url = '/yelp' + '&query=' + infoSearch + '&location=' + lat + "," + lng + '&radius=3000';
    fetch(url, {method: 'GET'}).then(function (response) {
      return response.json();
    }).then(json => {
      this.setState({
        searchedPOI: json.results,
        searchBar: infoSearch,
        active: 'SEARCH_ENTER'
      });
    }).catch(function (error) {
      console.log('Error:', error);
    });
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
    const userRecog = state.userLoading;
    const searchPOI = state.searchBar;
    return (
      <div>
        {userRecog ? (
          <div>
            {mainNav === 'ORIGIN' ? (
              <div>
                <ChatUsers users={ props.users }
                           focusModal={this.onToggleNav.bind(this)}
                           currentPage={active}
                           previousPage={state.previousPage}
                           toggleFunction={this.handleClick.bind(this)}
                />
              </div>
            ) : mainNav === 'DESTINATION' ? (
              <SearchNavBar users={ props.users }
                            backButton={this.goBackButton.bind(this)}
                            searchText={this.getText.bind(this)}
                            focusModal={this.openModal.bind(this)}
                            currentPage={active}
                            handleAnimation={this.handleMapAnimation.bind(this)}
                            toggleFunction={this.handleClick.bind(this)}
              />
            ) : null}
            {active === 'FIRST' ? (
              <div>
                <div className="empty-div"></div>
                <ChatHistory
                  history={ props.history }
                  getMarker={this.getMarker.bind(this)}
                  me={ props.userID }
                />
                <ChatInput userID={ props.userID } sendMessage={ sendMessage }/>
              </div>
            ) : active === 'SECOND' ? (
              <div>
                <GoogleMap
                  focusModal={this.onToggleNav.bind(this)}
                  toggleFunction={this.handleClick.bind(this)}
                  markers={ props.markers }
                  userID={ props.userID }
                  newMessage={state.newMessage}
                  sendMarker={ this.sendMarker.bind(this) }
                  allPOI={props.history}
                  fromWHere={state.fromWhereToMap}
                  markerFromHistory={state.goToMarker}
                />
              </div>
            ) : active === 'SEARCH' ? (
              <div>
                <div
                  className="add-height"
                >
                </div>
                <SearchFunction
                  searchText={this.getText.bind(this)}
                />
              </div>
            )
              : active === 'SEARCH_ENTER' ? (
              <div>
                <div
                  className="add-height"
                >
                </div>
                <SearchList
                  textSearch={searchPOI}
                  POI={state.searchedPOI}
                  sendMessage={ sendMessage }
                  allPOI={props.history}
                  userID={ props.userID }
                  currentLoc={state.currentLoc}
                />
              </div>
            )
              : active === 'SEARCH_MAP' ? (
              <div>
                <div
                  className="add-height"
                >
                </div>
                <SearchMap
                  markers={ props.markers }
                  POI={state.searchedPOI}
                  userID={ props.userID }
                  currentLoc={state.currentLoc}
                  sendMessage={ sendMessage }
                  allPOI={props.history}
                  sendMarker={ this.sendMarker.bind(this)}
                  handleAnimation={state.forMapAnimation}
                  toggleFunction={this.handleClick.bind(this)}
                />
              </div>
            )
              : null}
          </div>
        ) : (
          <div>
            <Spinner className="loading" spinnerName="wandering-cubes"/>
          </div>
        )}
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
    let whatIspreviousPage = this.state.previousPage;
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
        whatIspreviousPage = 'MAP';
        break; // it encounters this break so will not continue into 'case 2:'
      case 'SEARCH_ENTER':
        newActive = 'SEARCH_MAP';
        break;
      case 'SEARCH_MAP':
        newActive = 'SEARCH_ENTER';
        break;
      default:
        newActive = 'SECOND';
    }
    this.setState({
      active: newActive,
      fromWhereToMap: 'main',
      forMapAnimation: false,
      previousPage: whatIspreviousPage
    });
  }

  handleMapAnimation = () => {
    this.setState({
      forMapAnimation: true
    });
  };

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
    if (this.state.active === 'SEARCH') {
      this.setState(
        {
          mainNav: 'ORIGIN',
          active: 'FIRST'
        }
      );
    } else if (this.state.active === 'SEARCH_MAP' || this.state.active === 'SEARCH_ENTER') {
      this.setState(
        {
          mainNav: 'DESTINATION',
          active: 'SEARCH'
        }
      );
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
