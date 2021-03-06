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
    currentLoc: React.PropTypes.array
  };

  _shareMarker(marker, e) {
    const markerId = '#' + marker.id;
    const markerIdButton = '#' + marker.id + "button";
    $(markerIdButton).hide();
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
    const userCurrentLoc = this.props.currentLoc;
    const allExistingID = [];
    let robj;
    const markerHistory = this.props.allPOI;
    const getMarker = markerHistory.filter(function (el) {
      return el.Type === 'marker';
    });
    getMarker.map(function (existingMarker) {
      allExistingID.push(existingMarker.Where.id);
    });
    const reformedPlaces = this.state.places.map(function (obj) {
      const disLat = obj.geometry.location.lat;
      const disLng = obj.geometry.location.lng;
      const totalDistance = geolib.getDistance(
        {latitude: disLat, longitude: disLng},
        {latitude: userCurrentLoc[0], longitude: userCurrentLoc[1]}
      );
      //const distanceInMiles = totalDistance / 6000;
      const distanceInMiles = Math.floor(Math.random() * Math.floor(30)) + 1;
      const formattedAddress = obj.formatted_address.split(",").splice(0, 2);
      const joinnedAddress = formattedAddress.join(",");

      if (allExistingID.includes(obj.id)) {
        robj = {
          id: obj.id,
          name: obj.name,
          pic: obj.icon,
          rating: obj.rating,
          address: joinnedAddress,
          background: '#ffffff',
          imgBorderColor: 'black',
          distance: distanceInMiles + ' Minutes',
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
          address: joinnedAddress,
          background: '#ffffff',
          imgBorderColor: 'black',
          distance: distanceInMiles + ' Minutes',
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
                  <div style={{fontWeight:'100'}}>{place.distance + " away"}</div>
                  <div style={{fontWeight:'100'}}>{place.address}</div>
                  <div style={{fontWeight:'100'}}>{"Rating :" + " " + place.rating}</div>
                  <img id={place.id} className={place.existing} src="https://i.imgur.com/76rcbCP.png"/>
                  </div>
                  }
                  actAsExpander={true}

                />
                { place.existing === "item-share" ? (
                <CardActions>
                  <FlatButton
                    style={{
                      color:'#fff'
                    }}
                    id={place.id + "button"}
                    className="active sharebutton"
                    label="Share"
                    onClick={this._shareMarker.bind(this, place)}
                  />
                </CardActions>
                ) : null }
              </Card>
            )}
          </div>
        </MuiThemeProvider>
      </div>
    );
  }

}
