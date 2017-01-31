/**
 * Created by JNEP on 1/30/17.
 */
import React, {Component} from 'react';
import { Map, TileLayer, Marker, Popup} from 'react-leaflet';

export default class GoogleMap extends Component {
  static propTypes = {
    markers: React.PropTypes.array,
    userID: React.PropTypes.number,
    sendMarker: React.PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      selfMarker: '',
      othersMarkers: props.markers,
      center: [47.6553, -122.3035],
      lat: 47.658350,
      lng: -122.313782,
      zoom: 5,
    };
  }

  componentWillMount() {
    const us =  this.props.markers;
    const me = this.props.userID;
    console.log('us', us);
    const friends = us.filter(function(el) {
      return el.id !== me;
    });
    const myMarker = us.filter(function(el) {
      return el.id === me;
    });
    console.log('friend', friends);
    this.setState({
      center: [myMarker[0].lat, myMarker[0].lng],
      selfMarker: [myMarker[0].lat, myMarker[0].lng],
      othersMarkers: friends,
    });
  }

  componentDidMount() {
    console.log(this.state.othersMarkers);
    console.log(this.state.selfMarker);
  }

  render() {
    const position = this.state.center;
    return (
      <Map
        style={{height: '100vh'}}
        center={position}
        zoom={10}>
        <TileLayer
          url="https://api.mapbox.com/styles/v1/junep1009/ciyjx3eah000i2skuw54czps9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoianVuZXAxMDA5IiwiYSI6ImNpaTFpbXZhMjAwYXFzd2txaWhwZWg0MGkifQ.zVbpTuEmpLzyRasVFfkysQ"
          attribution="<attribution>"/>
        <Marker position={position}>
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
      </Map>
    );
  }
}

