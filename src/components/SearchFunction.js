/**
 * Created by JNEP on 1/28/17.
 */
import React, {Component} from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';

const styles = {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  gridList: {
    width: 500,
    height: 450,
    overflowY: 'auto',
  },
};

const tilesData = [
  {
    img: 'https://images.unsplash.com/photo-1463183665146-ce2ed31df6b0?dpr=2&auto=format&fit=crop&w=1199&h=799&q=80&cs=tinysrgb&crop=',
    title: 'Restaurant',
    author: 'jill111',
  },
  {
    img: 'https://images.unsplash.com/photo-1470338745628-171cf53de3a8?dpr=2&auto=format&fit=crop&w=767&h=1148&q=80&cs=tinysrgb&crop=',
    title: 'Bar',
    author: 'pashminu',
  },
  {
    img: 'https://images.unsplash.com/photo-1454435840133-795d84feef63?dpr=2&auto=format&fit=crop&w=767&h=511&q=80&cs=tinysrgb&crop=',
    title: 'Coffee',
    author: 'Danson67',
  },
  {
    img: 'https://images.unsplash.com/photo-1445824285584-336d1e77abbf?dpr=2&auto=format&fit=crop&w=767&h=526&q=80&cs=tinysrgb&crop=',
    title: 'Park',
    author: 'fancycrave1',
  },
];


export default class SearchCard extends Component {
  static propTypes = {
    searchText: React.PropTypes.func,
  };
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentWillMount() {
  }

  componentDidMount() {
  }

  _onClickButton(message) {
    this.props.searchText(message);
  }

  render() {
    return (
      <MuiThemeProvider>
      <div style={styles.root}>
        <GridList
          cellHeight={180}
          style={styles.gridList}
        >
          <Subheader>POI Types</Subheader>
          {tilesData.map((tile) => (
            <GridTile
              key={tile.img}
              title={tile.title}
              actionIcon={
              <IconButton
              onClick={() => this._onClickButton(tile.title)}
              >
              <i
              className="font-searchlist material-icons">location_searching</i>
              </IconButton>
              }
            >
              <img src={tile.img} />
              </GridTile>
          ))}
        </GridList>
      </div>
        </MuiThemeProvider>
    );
  }


}

