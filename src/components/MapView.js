/**
 * Created by JNEP on 12/22/16.
 */
import MapGL from 'react-map-gl';
import * as React from 'react';
navigator.geolocation.watchPosition((position) => {
  console.log(position);
});

export default class MapView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      lat: 47.6553,
      lng: -122.3035,
    };
  }

  componentWillMount() {
    this.setState({
      lat: 47.6553,
      lng: -122.3035,
    });
  }

  render() {
    return (
      <MapGL
        mapboxApiAccessToken={'pk.eyJ1IjoianVuZXAxMDA5IiwiYSI6ImNpaTFpbXZhMjAwYXFzd2txaWhwZWg0MGkifQ.zVbpTuEmpLzyRasVFfkysQ'}
        width={'100%'}
        height={'100vh'}
        latitude={this.state.lat}
        longitude={this.state.lng}
        zoom={14}
      />);
  }
}
