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
    width: '96%',
    height: 'auto',
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
          cols={1}
          padding={15}
          style={styles.gridList}
        >
          <Subheader style={{color:'rgba(255,255,255,0.4)', textAlign:'center', fontSize:'1.5em', padding:'18px 0px 0px 0px'}}>Categories</Subheader>
          {tilesData.map((tile) => (
            <GridTile
              key={tile.img}
              title={tile.title}
              titleBackground="linear-gradient(rgba(119, 27, 211,0), rgba(119, 27, 211,0.5))"
              titleStyle={{
                fontSize:'2em'
              }}
              style={{
                borderRadius:'7px',
                webkitBorderRadius: '7px',
                mozBorderRadius: '7px',
                boxShadow: '0px 5px 20px rgba(0, 0, 0, 0.2)'
              }}
              actionIcon={<IconButton/>}
              onClick={() => this._onClickButton(tile.title)}
            >
              <img
                src={tile.img}
                style={{
                  filter:'grayscale(70%) brightness(60%)'
                }} />
              </GridTile>
          ))}
        </GridList>
      </div>
        </MuiThemeProvider>
    );
  }


}
