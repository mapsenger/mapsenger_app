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
    allPOI: React.PropTypes.array,
    userID: React.PropTypes.number,
  };

  _shareMarker(marker, e) {
    const markerId = '#' + marker.id;
    $(markerId).removeClass('item-share');
    $(markerId).addClass('item-shared');
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
    const allExistingID = [];
    let robj;
    const markerHistory = this.props.allPOI;
    const getMarker = markerHistory.filter(function (el) {
      return el.Type === 'marker';
    });
    getMarker.map(function (existingMarker) {
      allExistingID.push(existingMarker.Where.id);
    });
    console.log(allExistingID);
    const reformedPlaces = this.state.places.map(function (obj) {
      const disLat = obj.geometry.location.lat;
      const disLng = obj.geometry.location.lng;
      const totalDistance = geolib.getDistance(
        {latitude: disLat, longitude: disLng},
        {latitude: 47.658350, longitude: -122.313782}
      );
      const distanceInMiles = totalDistance / 6000;
      if (allExistingID.includes(obj.id)) {
        robj = {
          id: obj.id,
          name: obj.name,
          pic: obj.icon,
          rating: obj.rating,
          address: obj.formatted_address.split(",")[0],
          background: '#ffffff',
          imgBorderColor: 'black',
          distance: String(distanceInMiles.toFixed(2)) + ' Miles',
          lat: disLat,
          lng: disLng,
          existing: 'item-shared'
        };
      } else {
        robj = {
          id: obj.id,
          name: obj.name,
          pic: obj.icon,
          rating: obj.rating,
          address: obj.formatted_address.split(",")[0],
          background: '#ffffff',
          imgBorderColor: 'black',
          distance: String(distanceInMiles.toFixed(2)) + ' Miles',
          lat: disLat,
          lng: disLng,
          existing: 'item-share'
        };
      }
      return robj;
    });
    this.setState({
      places: reformedPlaces
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
    );
  }

}
