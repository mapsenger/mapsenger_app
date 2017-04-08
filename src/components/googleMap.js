/**
 * Created by JNEP on 1/30/17.
 */
import React, {Component} from 'react';
import { Map, TileLayer, Marker, Popup} from 'react-leaflet';
import Control from 'react-leaflet-control';
import { divIcon } from 'leaflet';


export default class GoogleMap extends Component {
  static propTypes = {
    markers: React.PropTypes.array,
    userID: React.PropTypes.number,
    sendMarker: React.PropTypes.func,
    allPOI: React.PropTypes.array,
    markerFromHistory: React.PropTypes.array,
    fromWHere: React.PropTypes.string,
    newMessage: React.PropTypes.string,
    toggleFunction: React.PropTypes.func,
    focusModal: React.PropTypes.func,
  };

  _currentLocation() {
    const currentLocation = this.state.center;
    this.setState({
      center: [currentLocation[0] + 0.000001, currentLocation[1] + 0.000001]
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      selfMarker: '',
      myMarkerCSS: '',
      friendsCustomMarkers: '',
      othersMarkers: props.markers,
      center: [47.6553, -122.3035],
      lat: 47.658350,
      lng: -122.313782,
      zoom: 15,
      POI: '',
      newMessage: 'fuck'
    };
  }

  componentWillMount() {
    const us = this.props.markers;
    const me = this.props.userID;
    const markerHistory = this.props.allPOI;
    // Get all friends locations
    const friends = us.filter(function (el) {
      console.log(el.id);
      return el.id !== me;
    });
    // User Marker
    const mIcon = divIcon({
      className: 'current-user-div-icon',
      iconSize: [15, 15]
    });
    // Friends Markers
    const friendsIcon = friends.map(function (friend) {
      const imgURL = 'https://api.adorable.io/avatars/92/' + friend.id;
      const markerUrl = '<img class="friend-div-icon" src=' + imgURL + '/>';
      return {
        id: friend.id,
        lat: friend.lat,
        lng: friend.lng,
        markerIcon: divIcon({
          className: 'friend-div-icon',
          html: markerUrl,
          iconSize: [20, 20]
        })
      };
    });
    // Get my location for the marker
    const myMarker = us.filter(function (el) {
      return el.id === me;
    });
    // Get all POI location
    const getMarker = markerHistory.filter(function (el) {
      return el.Type === 'marker';
    });
    const reformedPlaces = getMarker.map(function (obj) {
      const robj = {
        markerID: obj.Where.markerID,
        markerIcon: divIcon({
          className: 'my-div-icon',
          html: '<img src="http://i.imgur.com/fSL4zE3.png"/>',
          iconSize: [30, 30]
        }),
        lat: obj.Where.lat,
        lng: obj.Where.lng,
        name: obj.Where.name,
        pic: obj.Where.pic,
        rating: obj.Where.rating,
        address: obj.Where.address,
        background: '#ffffff',
        imgBorderColor: 'black',
        distance: obj.Where.distance,
      };
      return robj;
    });
    console.log('from history', this.props.markerFromHistory);
    const whereIsCurrent = (this.props.fromWHere === 'main' && myMarker[0].lat !== null) ?
      [myMarker[0].lat, myMarker[0].lng] :
      [this.props.markerFromHistory.lat, this.props.markerFromHistory.lng];

    // Set the state for all markers
    this.setState({
      myMarkerCSS: mIcon,
      center: whereIsCurrent,
      selfMarker: [myMarker[0].lat, myMarker[0].lng],
      othersMarkers: friends,
      POI: reformedPlaces,
      friendsCustomMarkers: friendsIcon,
    });
  }

  componentDidMount() {
    console.log('new message app', this.props.newMessage);
    console.log(this.state.POI);
  }

  componentDidUpdate() {
    console.log('map app', this.props.newMessage);
    if (this.props.newMessage !== this.state.newMessage) {
        this.setState({
          newMessage: this.props.newMessage
        });
    }
  }

  _onClickButton() {
    this.props.toggleFunction();
  }

  _onFocus() {
    this.props.focusModal('DESTINATION');
  }

  render() {
    const position = this.state.center;
    return (
      <div className="wrapper-map">
        <Map
          style={{height: '100vh'}}
          center={position}
          zoom={this.state.zoom}>
          <TileLayer
            url="https://api.mapbox.com/styles/v1/junep1009/ciyjx3eah000i2skuw54czps9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoianVuZXAxMDA5IiwiYSI6ImNpaTFpbXZhMjAwYXFzd2txaWhwZWg0MGkifQ.zVbpTuEmpLzyRasVFfkysQ"
            attribution="<attribution>"/>
          <Marker
            position={this.state.selfMarker}
            icon={this.state.myMarkerCSS}
          >
            <Popup>
              <span>You are here.<br/></span>
            </Popup>
          </Marker>
          { this.state.friendsCustomMarkers.map((marker, index) =>
            <Marker
              icon={marker.markerIcon}
              position={[0.01 * (index + 1) + marker.lat, marker.lng]}/>
          )}
          { this.state.POI.map((marker, index) =>
            <Marker
              icon={marker.markerIcon}
              position={[marker.lat, marker.lng]}>
              <Popup>
              <span>
                Name: <b>{marker.name}</b><br/>
                Rating: <b>{marker.rating}</b><br/>
                <button
                  onClick={() => this._shareMarker(marker)}
                >
                  Share
                </button>
              </span>
              </Popup>
            </Marker>
          )}
          <Control position="topleft">
            <i
              onClick={this._currentLocation.bind(this)}
              className="fa fa-street-view map-current-location" aria-hidden="true"/>
          </Control>
        </Map>
        <div className="mui-container-fluid">
          <div className="navbar-map mui-row online-user-map">
            <div
              className="textSearch-map mui-col-md-8 mui-col-xs-8 mui-col-lg-8 mui-col-md-offset-1 mui-col-xs-offset-1 mui-col-lg-offset-1">
              <input ref="txtMessage"
                     type="text"
                     onFocus={ this._onFocus.bind(this) }
                     placeholder="Search"/>
            </div>
            <div className="toggle-button-col mui-col-md-1 mui-col-xs-1 mui-col-lg-1">
              <button className="toggle-button-div-chat" onClick={this._onClickButton.bind(this)}>
              </button>
            </div>
          </div>
        </div>
        <div id="chatNotif" className="map-chat-notif">
          <p
          style={{color:'black'}}
          >{this.state.newMessage}</p>
        </div>
        <div id="notiGradient"></div>
      </div>
    );
  }
}
