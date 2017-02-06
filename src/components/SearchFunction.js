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
    img: 'images/grid-list/00-52-29-429_640.jpg',
    title: 'Restaurant',
    author: 'jill111',
  },
  {
    img: 'images/grid-list/burger-827309_640.jpg',
    title: 'Bar',
    author: 'pashminu',
  },
  {
    img: 'images/grid-list/camera-813814_640.jpg',
    title: 'Coffee',
    author: 'Danson67',
  },
  {
    img: 'images/grid-list/morning-819362_640.jpg',
    title: 'Park',
    author: 'fancycrave1',
  },
  {
    img: 'images/grid-list/hats-829509_640.jpg',
    title: 'Hats',
    author: 'Hans',
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
              <i className="material-icons">location_searching</i>
              </IconButton>
              }
            />
          ))}
        </GridList>
      </div>
        </MuiThemeProvider>
    );
  }


}

