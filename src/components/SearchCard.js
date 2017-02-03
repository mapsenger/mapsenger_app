/**
 * Created by JNEP on 1/28/17.
 */
import React, {Component} from 'react';
import { CardStack, Card } from 'react-cardstack';
import geolib from 'geolib';
import people from './people';

export default class SearchCard extends Component {
  static propTypes = {
    textSearch: React.PropTypes.string,
    POI: React.PropTypes.array,
  };

  constructor(props) {
    super(props);
    this.state = {
      places: props.POI,
    };
  }

  componentWillMount() {
    const reformedPlaces = this.state.places.map(function(obj) {
      const disLat = obj.geometry.location.lat;
      const disLng = obj.geometry.location.lng;
      const totalDistance =  geolib.getDistance(
        {latitude: disLat, longitude: disLng},
        {latitude: 47.658350, longitude: -122.313782}
      );
      const distanceInMiles = totalDistance / 6000;
      const robj = {
        name: obj.name,
        pic: obj.icon,
        rating: obj.rating,
        address: obj.formatted_address,
        background: '#ffffff',
        imgBorderColor: 'black',
        distance: String(distanceInMiles) + 'Miles',
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
        <CardStack
          height={1600}
          width={1500}
          background="#f8f8f8"
          hoverOffset={25}>

          {this.state.places.map((person, i) =>
            <Card
              key={i}
              background={person.background}>
              <TeamMemberCard {...person} />
            </Card>
          )}
        </CardStack>
      </div>
    );
  }

}

const DetailsRow = ({ icon, title, summary }) => {
  const renderSummary = () => {
    if (summary) {
      return (
      <p style={{ fontWeight: 200, lineHeight: 1.45 }}>
        {summary}
      </p>
    );}
    return null;
  };

  return (
    <div style={styles.detailsRow.row}>
			<span
        className={`icon ${icon}`}
        style={{ ...styles.detailsRow.icon, alignSelf: 'flex-start' }}
      />
      <div style={{ width: '80%' }}>
        <h2 style={styles.detailsRow.title}>
          {title}
        </h2>
        {renderSummary()}
      </div>
    </div>
  );
};

const ProfilePicture = ({ imgSrc, borderColor }) => (
  <img
    style={{
			width: '60px',
			height: '60px',
			borderRadius: '100%',
			border: `3px solid ${borderColor}`,
		}}
    src={imgSrc}
  />
);

const TeamMemberCard = (props) => (
  <div style={{ position: 'absolute', top: 0 }} onClick={props.onClick}>
    <header style={styles.cardHeader} className="card-header-details">
      <ProfilePicture imgSrc={props.pic} borderColor={props.imgBorderColor} />
      <div>
        <h1 style={styles.headerName}>{props.name}</h1>
        <h3 style={styles.headerTitle} className="icon ion-ios-arrow-down">{props.distance}</h3>
      </div>
    </header>
    <div style={{color: 'black'}}>
      <DetailsRow
        icon="ion-ios-telephone-outline"
        title={props.address}
      />
      <DetailsRow
        icon="ion-ios-location-outline"
        title={props.rating}
      />
    </div>
  </div>
);

const styles = {
  cardHeader: {
    display: 'flex',
    height: '125px',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    color: 'black',
  },
  headerName: {
    margin: 0,
    fontWeight: 500,
    fontSize: '25px',
    textAlign: 'right',
  },
  headerTitle: {
    margin: '4px 0 0',
    fontWeight: 300,
    fontSize: '17px',
    opacity: 0.8,
    textAlign: 'right',
  },
  detailsRow: {
    row: {
      width: '100%',
      padding: '0 20px',
      display: 'flex',
      alignItems: 'center',
      margin: '25px 0',
    },
    icon: {
      display: 'block',
      width: '25px',
      height: '30px',
      margin: '0 20px 0 0',
      borderBottom: '1px solid rgba(255, 255, 255, 0.8)',
      textAlign: 'center',
      fontSize: '22px',
    },
    title: {
      fontWeight: 400,
      fontSize: '20px',
      margin: 0,
      fontStyle: 'italic',
    },
  },
};

