/**
 * Created by JNEP on 2/6/17.
 */
import React, {Component} from 'react';
import geolib from 'geolib';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

export default class SearchList extends Component {
  static propTypes = {
    textSearch: React.PropTypes.string,
    POI: React.PropTypes.array,
    sendMessage: React.PropTypes.func,
    markerFromHistory: React.PropTypes.array,
    userID: React.PropTypes.number,
  };

  _shareMarker(marker, e) {
    const messageObj = {
      Who: this.props.userID,
      // What: message,
      When: new Date().valueOf(),
      Where: marker,
      Type: 'marker',
    };
    this.props.sendMessage(messageObj);
  }


  constructor(props) {
    super(props);
    this.state = {
      showReply: false,
      places: props.POI,
      'active': false,
      'class': 'album'
    };
  }

  componentWillMount() {
    const reformedPlaces = this.state.places.map(function(obj) {
      const disLat = obj.geometry.location.lat;
      const disLng = obj.geometry.location.lng;
      const totalDistance = geolib.getDistance(
        {latitude: disLat, longitude: disLng},
        {latitude: 47.658350, longitude: -122.313782}
      );
      const distanceInMiles = totalDistance / 6000;
      const robj = {
        name: obj.name,
        pic: obj.icon,
        rating: obj.rating,
        address: obj.formatted_address.split(",")[0],
        background: '#ffffff',
        imgBorderColor: 'black',
        distance: String(distanceInMiles.toFixed(2)) + ' Miles',
        lat: disLat,
        lng: disLng,
      };
      return robj;
    });
    this.setState({
      places: reformedPlaces,
    });
  }

  componentDidMount() {
    console.log(this.state.places);
  }

  render() {
    return (
      <div>
        <MuiThemeProvider>
          <div>
            {this.state.places.map((place, i) =>
              <Card
              style={{
              backgroundColor: 'lightgrey'
              }}
              >
                <CardHeader
                  title={place.name}
                  label="This toggle controls the expanded state of the component."
                  subtitle={
                  <div>
                  <div>{"Rating: " + place.rating}</div>
                  <div>{"Address: " + place.address}</div>
                  <div>{"Distance: " + place.distance}</div>
                  <img className="item-shared" src="http://i.imgur.com/fSL4zE3.png"/>
                  </div>
                  }
                  actAsExpander={true}
                />
                <CardActions>
                  <FlatButton
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
    );
  }

}

