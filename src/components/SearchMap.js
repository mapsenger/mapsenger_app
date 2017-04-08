/**
 * Created by JNEP on 1/30/17.
 */
import React, {Component} from 'react';
import { Map, TileLayer, Marker, Popup} from 'react-leaflet';
import { divIcon } from 'leaflet';
import geolib from 'geolib';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';


export default class SearchMap extends Component {
  static propTypes = {
    markers: React.PropTypes.array,
    userID: React.PropTypes.number,
    sendMarker: React.PropTypes.func,
    POI: React.PropTypes.array,
    allPOI: React.PropTypes.array,
    currentLoc: React.PropTypes.array,
    sendMessage: React.PropTypes.func,
    toggleFunction: React.PropTypes.func
  };

  _shareMarker(marker) {
    const currentMarkerID = '#' + marker.id;
    $(currentMarkerID).attr('src', 'http://i.imgur.com/76rcbCP.png');
    const messageObj = {
      Who: this.props.userID,
      When: new Date().valueOf(),
      Where: marker,
      Type: 'marker',
    };
    this.props.sendMessage(messageObj);
  }

  _moveList() {
    console.log('moved');
    const listSet = '#listOnMap';
    $(listSet).removeClass('list-small');
    $(listSet).addClass('list-full-nav');
    setTimeout(function() {
      this.props.toggleFunction('SEARCH_MAP');
    }.bind(this),
      700);
  }


  constructor(props) {
    super(props);
    this.state = {
      selfMarker: '',
      myMarkerCSS: '',
      othersMarkers: props.markers,
      poiMarkers: props.POI,
      center: props.currentLoc,
      lat: 47.658350,
      lng: -122.313782,
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
      const distanceInMiles = totalDistance / 6000;
      if (allExistingID.includes(obj.id)) {
        robj = {
          id: obj.id,
          markerIcon: divIcon({
            className: 'my-div-icon',
            html: '<img id=' + obj.id + ' src="http://i.imgur.com/76rcbCP.png"/>',
            iconSize: [15, 15]
          }),
          lat: disLat,
          lng: disLng,
          name: obj.name,
          pic: obj.icon,
          rating: obj.rating,
          address: obj.formatted_address,
          background: '#ffffff',
          imgBorderColor: 'black',
          distance: String(distanceInMiles.toFixed(2)) + ' Miles',
          existing: 'item-shared'
        };
      } else {
        robj = {
          id: obj.id,
          markerIcon: divIcon({
            className: 'my-div-icon',
            html: '<img id=' + obj.id + ' src="http://i.imgur.com/fSL4zE3.png"/>',
            iconSize: [25, 25]
          }),
          lat: disLat,
          lng: disLng,
          name: obj.name,
          pic: obj.icon,
          rating: obj.rating,
          address: obj.formatted_address,
          background: '#ffffff',
          imgBorderColor: 'black',
          distance: String(distanceInMiles.toFixed(2)) + ' Miles',
          existing: 'item-share'
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
              position={[0.01 * (index + 1) + marker.lat, marker.lng]}/>
          )}
          { this.state.poiMarkers.map((marker, index) =>
            <Marker
              id={marker.id}
              icon={marker.markerIcon}
              position={[marker.lat, marker.lng]}>
              <Popup>
              <span>
                <b>{marker.name}</b><br/>
                <b>Rating: </b>{marker.rating}<br/>
                <b>Distance: </b>{marker.distance}<br/>
                <button
                  className="search-map-button"
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
            <div>
              {this.state.poiMarkers.map((place, i) =>
                <Card
                  onClick={this._moveList.bind(this)}
                  style={{
                  backgroundColor: '#363636',
                  boxShadow:'none',
                  borderRadius:'none',
                  borderBottom:'1px #4a4a4a solid',
                  paddingRight:'none'
                }}
                >

                  <CardHeader
                    style={{
                    padding: '16px 16px 0px 16px',
                  }}
                    titleColor="#fff"
                    title={place.name}
                    label="This toggle controls the expanded state of the component."
                    subtitleColor="#fff"
                    subtitle={
                  <div>
                  <div style={{fontWeight:'100'}}>{"Rating: " + place.rating}</div>
                  <div style={{fontWeight:'100'}}>{"Address: " + place.address}</div>
                  <div style={{fontWeight:'100'}}>{"Distance: " + place.distance}</div>
                  <img id={place.id} className={place.existing} src="http://i.imgur.com/76rcbCP.png"/>
                  </div>
                  }
                    actAsExpander={true}

                  />
                  <CardActions>
                    <FlatButton
                      style={{
                      color:'#fff'
                    }}
                      className="active"
                      label="Share"
                      onClick={this._shareMarker.bind(this, place)}
                    />
                  </CardActions>
                </Card>
              )}
            </div>
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}

