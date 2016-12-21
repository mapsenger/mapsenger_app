/**
 * Created by JNEP on 12/22/16.
 */
import MapGL from 'react-map-gl';
import * as React from 'react';
export default class MapView extends React.Component {
  render() {
    return (<MapGL
      width={700}
      height={450}
      latitude={37.78}
      longitude={-122.45}
      zoom={11}
    />);
  }
}
