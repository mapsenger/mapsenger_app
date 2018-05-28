/**
 * Created by JNEP on 1/30/17.
 */
import React, {Component} from 'react';
import { Map, TileLayer, Marker, Popup} from 'react-leaflet';
import { divIcon } from 'leaflet';
import geolib from 'geolib';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import Control from 'react-leaflet-control';
import FlatButton from 'material-ui/FlatButton';


export default class SearchMap extends Component {
  static propTypes = {
    markers: React.PropTypes.array,
    userID: React.PropTypes.number,
    //sendMarker: React.PropTypes.func,
    POI: React.PropTypes.array,
    allPOI: React.PropTypes.array,
    currentLoc: React.PropTypes.array,
    sendMessage: React.PropTypes.func,
    toggleFunction: React.PropTypes.func,
    handleAnimation: React.PropTypes.string
  };

  _shareMarker(marker) {
    const currentMarkerID = '#' + marker.id;
    const buttonID = '#marker' + marker.id;
    $(currentMarkerID).attr('src', 'https://i.imgur.com/76rcbCP.png');
    $(buttonID).addClass('pressed');
    const messageObj = {
      Who: this.props.userID,
      When: new Date().valueOf(),
      Where: marker,
      Type: 'marker',
    };
    this.props.sendMessage(messageObj);
  }

  _moveList() {
    const listSet = '#listOnMap';
    $(listSet).removeClass('list-small');
    $(listSet).addClass('list-full-nav');
    setTimeout(function () {
        this.props.toggleFunction('SEARCH_MAP');
      }.bind(this),
      250);
  }

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
      othersMarkers: props.markers,
      poiMarkers: props.POI,
      center: props.currentLoc,
      lat: props.currentLoc[0],
      lng: props.currentLoc[1],
      zoom: 14,
      active: false,
      class: 'album',
      showReply: false,
    };
  }

  componentWillMount() {
    const markerHistory = this.props.allPOI;
    const allExistingID = [];
    let robj;
    const getMarker = markerHistory.filter(function (el) {
      return el.Type === 'marker';
    });
    getMarker.map(function (existingMarker) {
      allExistingID.push(existingMarker.Where.id);
    });
    const us = this.props.markers;
    const me = this.props.userID;
    const friends = us.filter(function (el) {
      return el.id !== me;
    });
    const myMarker = us.filter(function (el) {
      return el.id === me;
    });
    const userCurrentLoc = this.props.currentLoc;
    console.log(userCurrentLoc);
    // User Marker
    const mIcon = divIcon({
      className: 'current-user-div-icon',
      iconSize: [15, 15]
    });

    // Friends' markers
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

    // POIs Marker
    const reformedPlaces = this.state.poiMarkers.map(function (obj) {
      const disLat = obj.geometry.location.lat;
      const disLng = obj.geometry.location.lng;
      const totalDistance = geolib.getDistance(
        {latitude: disLat, longitude: disLng},
        {latitude: userCurrentLoc[0], longitude: userCurrentLoc[1]}
      );
      /*const distanceInMiles = totalDistance / 6000;*/
      const distanceInMiles = Math.floor(Math.random() * Math.floor(30)) + 1;
      const formattedAddress = obj.formatted_address.split(",").splice(0, 2);
      const joinnedAddress = formattedAddress.join(",");
      if (allExistingID.includes(obj.id)) {
        robj = {
          id: obj.id,
          markerIcon: divIcon({
            className: 'my-div-icon',
            html: '<img id=' + obj.id + ' src="https://i.imgur.com/76rcbCP.png"/>',
            iconSize: [15, 15]
          }),
          lat: disLat,
          lng: disLng,
          name: obj.name,
          pic: obj.icon,
          rating: obj.rating,
          address: joinnedAddress,
          background: '#ffffff',
          imgBorderColor: 'black',
          distance: distanceInMiles + ' Minutes',
          existing: 'item-shared',
          buttonColor: 'button-shared'
        };
      } else {
        robj = {
          id: obj.id,
          markerIcon: divIcon({
            className: 'my-div-icon',
            html: '<img id=' + obj.id + ' src="https://i.imgur.com/fSL4zE3.png"/>',
            iconSize: [25, 25]
          }),
          lat: disLat,
          lng: disLng,
          name: obj.name,
          pic: obj.icon,
          rating: obj.rating,
          address: joinnedAddress,
          background: '#ffffff',
          imgBorderColor: 'black',
          distance: distanceInMiles + ' Minutes',
          existing: 'item-share',
          buttonColor: 'button-share'
        };
      }
      return robj;
    });
    this.setState({
      myMarkerCSS: mIcon,
      poiMarkers: reformedPlaces,
      selfMarker: [myMarker[0].lat, myMarker[0].lng],
      othersMarkers: friendsIcon
    });
  }

  componentDidMount() {
    const listSet = '#listOnMap';
    $(listSet).removeClass('list-full');
    $(listSet).addClass('list-small');
  }

  componentDidUpdate() {
    if (this.props.handleAnimation === true) {
      const listSet = '#listOnMap';
      $(listSet).removeClass('list-small');
      $(listSet).addClass('list-full-nav');
    }
  }

  render() {
    const position = this.state.center;
    return (
      <div className="wrapper-map">
        <Map
          zoomControl={false}
          style={{height: '100vh'}}
          center={position}
          zoom={this.state.zoom}>
          <TileLayer
            url="https://api.mapbox.com/styles/v1/junep1009/ciyjx3eah000i2skuw54czps9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoianVuZXAxMDA5IiwiYSI6ImNpaTFpbXZhMjAwYXFzd2txaWhwZWg0MGkifQ.zVbpTuEmpLzyRasVFfkysQ"
            attribution="<attribution>"/>
          <Marker
            position={this.props.currentLoc}
            icon={this.state.myMarkerCSS}
          >
            <Popup>
              <span>You are here.<br/></span>
            </Popup>
          </Marker>
          { this.state.othersMarkers.map((marker, index) =>
            <Marker
              icon={marker.markerIcon}
              position={[marker.lat, marker.lng]}/>
          )}
          { this.state.poiMarkers.map((marker, index) =>
            <Marker
              id={marker.id}
              icon={marker.markerIcon}
              position={[marker.lat, marker.lng]}>
              <Popup>
                <span>
                Name: <b>{marker.name}</b><br/>
                Rating: <b>{marker.rating}</b><br/>
                <button
                  id={"marker" + marker.id}
                  className={marker.buttonColor}
                  onClick={() => this._shareMarker(marker)}
                >
                  Share
                </button>
              </span>
              </Popup>
            </Marker>
          )}
        </Map>
        <div id="listOnMap" className="navbar-map-list list-full">
          <MuiThemeProvider>
            <div className="listroot"
                 style={{
                borderRadius:'20px',
                backgroundColor: '#363636',
              }}>
              {this.state.poiMarkers.map((place, i) =>

                <Card
                  onClick={this._moveList.bind(this)}
                  style={{
                  backgroundColor: 'transparent',
                  boxShadow:'none',
                  borderRadius:'none',
                  borderBottom:'1px #4a4a4a solid',
                  paddingRight:'none',

                }}
                >

                  <CardHeader
                    style={{
                    padding: '16px 16px 16px 16px',
                  }}
                    titleColor="#fff"
                    title={place.name}
                    label="This toggle controls the expanded state of the component."
                    subtitleColor="#fff"
                    subtitle={
                  <div>
                   <div style={{fontWeight:'100'}}>{place.distance}</div>
                    <div style={{fontWeight:'100'}}>{place.address}</div>
                  <div style={{fontWeight:'100'}}>{"Rating :" + " " + place.rating}</div>
                  <img id={place.id} className={place.existing} src="https://i.imgur.com/76rcbCP.png"/>
                  </div>
                  }
                    actAsExpander={true}

                  />
                </Card>
              )}
            </div>
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}
