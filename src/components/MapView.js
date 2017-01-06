/**
 * Created by JNEP on 12/22/16.
 */
import MapGL from 'react-map-gl';
import * as React from 'react';

export default class MapView extends React.Component {
  render() {
    return (
      <MapGL
        mapboxApiAccessToken={'pk.eyJ1IjoianVuZXAxMDA5IiwiYSI6ImNpaTFpbXZhMjAwYXFzd2txaWhwZWg0MGkifQ.zVbpTuEmpLzyRasVFfkysQ'}
        width={'100%'}
        height={'100vh'}
        latitude={37.78}
        longitude={-122.45}
        zoom={11}
      />);
  }
}
