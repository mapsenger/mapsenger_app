import React, {Component} from 'react';
import ReactMapboxGl, {Layer, Feature, ScaleControl, ZoomControl, Marker} from 'react-mapbox-gl';
import config from './config.json';
import style from './style.json';

const {accessToken} = config;

const containerStyle = {
  height: '100vh',
  width: '100%',
};


const markerContainer = document.createElement('div');
markerContainer.style.width = '400px';
markerContainer.style.position = 'absolute';

export default class MapView extends Component {
  static propTypes = {
    markers: React.PropTypes.array,
    userID: React.PropTypes.number,
    sendMarker: React.PropTypes.func,
  };

  _markerClick() {
    console.log('Marker clicked');
  }

  _markerMouseEnter() {
    console.log('Marker mouse enter');
  }

  _markerMouseLeave() {
    console.log('Marker mouse leave');
  }

  constructor(props) {
    super(props);
    this.state = {
      popup: null,
      marker: [-120.3035, 50.655],
      markers: props.markers,
      center: [-122.3035, 47.6553],
      othersFriends: null,
    };
  }

  componentWillMount() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.setState({
        center: [position.coords.longitude, position.coords.latitude],
        marker: [position.coords.longitude, position.coords.latitude],
      });
    });
    console.log(this.state.center);
  }

  componentDidMount() {
  }

  _onClickMarker = ({feature}) => {
    this.setState({
      center: feature.geometry.coordinates,
    });
  };

  _onClickMap(map) {
    console.log('Clicked on the map : ', map);
    this.props.sendMarker('hi');
  }

  _onStyleLoad(map) {
    console.log('Style loaded: ', map);
  }

  _onHover({map}) {
    map.getCanvas().style.cursor = 'pointer';
  }

  _onZoom(map) {
    console.log('Zoom level changed to ', map.getZoom());
  }

  _onEndHover({map}) {
    map.getCanvas().style.cursor = '';
  }

  render() {
    return (
      <ReactMapboxGl
        style={style}
        onClick={this._onClickMap.bind(this)}
        onZoom={this._onZoom}
        onStyleLoad={this._onStyleLoad}
        accessToken={accessToken}
        center={this.state.center}
        movingMethod="jumpTo"
        containerStyle={containerStyle}>
        <ScaleControl/>
        <ZoomControl/>
        <Layer
          type="symbol"
          layout={{'icon-image': 'harbor-15'}}>
          <Feature
            coordinates={this.state.marker}
            onHover={this._onHover}
            onEndHover={this._onEndHover}
            onClick={this._onClickMarker}/>
        </Layer>

        { this.props.markers.map((marker, index) => {
          return (<Marker
            onClick={this._markerClick}
            onMouseEnter={this._markerMouseEnter}
            onMouseLeave={this._markerMouseLeave}
            container={markerContainer}
            coordinates={[0.1 * index + marker.lng, marker.lat]}
            anchor="bottom"
          >
            <img src={'https://api.adorable.io/avatars/92/666'}/>
            <h1>TEST</h1>
          </Marker>);
        })}

      </ReactMapboxGl>
    );
  }

}

