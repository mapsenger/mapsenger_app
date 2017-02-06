/**
 * Created by JNEP on 1/30/17.
 */
import React, {Component} from 'react';
import { Map, TileLayer, Marker, Popup} from 'react-leaflet';
import { divIcon } from 'leaflet';


export default class GoogleMap extends Component {
  static propTypes = {
    markers: React.PropTypes.array,
    userID: React.PropTypes.number,
    sendMarker: React.PropTypes.func,
    allPOI: React.PropTypes.array,
    markerFromHistory: React.PropTypes.array,
    fromWHere: React.PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state = {
      selfMarker: '',
      myMarkerCSS: '',
      othersMarkers: props.markers,
      center: [47.6553, -122.3035],
      lat: 47.658350,
      lng: -122.313782,
      zoom: 15,
      POI: ''
    };
  }

  componentWillMount() {
    const us =  this.props.markers;
    const me = this.props.userID;
    const markerHistory = this.props.allPOI;
    // Get all friends locations
    const friends = us.filter(function(el) {
      return el.id !== me;
    });
    // User Marker
    const mIcon = divIcon({
      className: 'current-user-div-icon',
      iconSize: [15, 15]
    });
    // Get my location for the marker
    const myMarker = us.filter(function(el) {
      return el.id === me;
    });
    // Get all POI location
    const getMarker = markerHistory.filter(function(el) {
      return el.Type === 'marker';
    });
    const reformedPlaces = getMarker.map(function(obj) {
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
    const whereIsCurrent = (this.props.fromWHere === 'main') ?
      [myMarker[0].lat, myMarker[0].lng] :
      [this.props.markerFromHistory.lat, this.props.markerFromHistory.lng];

    // Set the state for all markers
    this.setState({
      myMarkerCSS: mIcon,
      center: whereIsCurrent,
      selfMarker: [myMarker[0].lat, myMarker[0].lng],
      othersMarkers: friends,
      POI: reformedPlaces,
    });
  }

  componentDidMount() {
    console.log(this.state.POI);
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
          position={this.state.selfMarker}
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
      </Map>
    );
  }
}

