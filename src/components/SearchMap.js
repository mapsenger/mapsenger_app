/**
 * Created by JNEP on 1/30/17.
 */
import React, {Component} from 'react';
import { Map, TileLayer, Marker, Popup} from 'react-leaflet';
import { divIcon } from 'leaflet';
import geolib from 'geolib';

export default class SearchMap extends Component {
  static propTypes = {
    markers: React.PropTypes.array,
    userID: React.PropTypes.number,
    sendMarker: React.PropTypes.func,
    POI: React.PropTypes.array,
    currentLoc: React.PropTypes.array,
  };

  _shareMarker(marker) {
    console.log(this.props.userID);
    console.log(marker);
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
    };
  }

  componentWillMount() {
    const userCurrentLoc = this.props.currentLoc;
    // User Marker
    const mIcon = divIcon({
        className: 'current-user-div-icon',
        iconSize: [15, 15]
    });

    // POIs Marker
    const reformedPlaces = this.state.poiMarkers.map(function(obj) {
      const disLat = obj.geometry.location.lat;
      const disLng = obj.geometry.location.lng;
      const totalDistance =  geolib.getDistance(
        {latitude: disLat, longitude: disLng},
        {latitude: userCurrentLoc[0], longitude: userCurrentLoc[1]}
      );
      const distanceInMiles = totalDistance / 6000;
      const robj = {
        markerID: obj.id,
        markerIcon: divIcon({
          className: 'my-div-icon',
          html: '<img src="http://i.imgur.com/fSL4zE3.png"/>' +  '<br><span style="text-align: center;">' + obj.name + '</span>',
          iconSize: [100, 100]
        }),
        lat: disLat,
        lng: disLng,
        name: obj.name,
        pic: obj.icon,
        rating: obj.rating,
        address: obj.formatted_address,
        background: '#ffffff',
        imgBorderColor: 'black',
        distance: String(distanceInMiles) + 'meters',
      };
      return robj;
    });
    this.setState({
      myMarkerCSS: mIcon,
      poiMarkers: reformedPlaces,
    });
  }

  componentDidMount() {
    console.log('allmarker', this.state.poiMarkers);
    console.log('friend', this.state.othersMarkers);
    console.log('myself', this.state.selfMarker);
  }

  render() {
    const position = this.state.center;
    return (
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
          <Marker position={[0.01 * (index + 1) + marker.lat, marker.lng]}>
            <Popup>
              <span>You friends are here.<br/></span>
            </Popup>
          </Marker>
        )}
        { this.state.poiMarkers.map((marker, index) =>
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
      </Map>
    );
  }
}

