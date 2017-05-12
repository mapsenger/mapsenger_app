/**
 * Created by JNEP on 1/28/17.
 */
import React, {Component} from 'react';
import {GridList, GridTile} from 'material-ui/GridList';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import IconButton from 'material-ui/IconButton';
import Subheader from 'material-ui/Subheader';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import Avatar from 'material-ui/Avatar';

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
  empty:{
    backgroundColor: 'transparent'
  }
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
    console.log(message);
    this.props.searchText(message);
  }

  render() {
    return (
      <MuiThemeProvider>
      <div style={styles.root}>
        <h3
          style={{
            color:'white',
            fontSize:'1.6em',
            fontWeight: '100',
            textAlign: 'center',
            padding: '30px'
          }}
          >
          Type keywords above or browse through recommendations</h3>

        <Card
          onClick={() => this._onClickButton('fast food')}
          style={{
            borderRadius:'10px',
            webkitBorderRadius: '10px',
            mozBorderRadius: '10px',
            boxShadow:'none',
            backgroundColor: 'none',
            border: '2.5px solid white',
            margin: '6px 12px',
            width: '100%'
          }}
          >

        <CardHeader
          title="Fast Food"
          titleColor="white"
          titleStyle={{
            fontWeight:'600',
            fontSize:'2em',
            lineHeight:1,
            paddingTop:'1em'
          }}
          subtitle="12 fast food nearby"
          subtitleColor="white"
          subtitleStyle={{
            fontWeight:'400',
            fontSize:'1.2em'
          }}
          style={{
            padding:'0px'

          }}
          avatar={
            <Avatar
              src="../img/fastfood.png"
              backgroundColor={'transparent'}
              size={100}
              style={{
                marginLeft: '16px'
              }}
            />
      }
        />
      </Card>

      <Card
        onClick={() => this._onClickButton('cafe')}
        style={{
          borderRadius:'10px',
          webkitBorderRadius: '10px',
          mozBorderRadius: '10px',
          boxShadow:'none',
          backgroundColor: 'none',
          border: '2.5px solid white',
          margin: '6px 12px',
          width: '100%'
        }}
        >

      <CardHeader
        title="Cafe"
        titleColor="white"
        titleStyle={{
          fontWeight:'600',
          fontSize:'2em',
          lineHeight:1,
          paddingTop:'1em'
        }}
        subtitle="20 cafes nearby"
        subtitleColor="white"
        subtitleStyle={{
          fontWeight:'400',
          fontSize:'1.2em'
        }}
        style={{
          padding:'0px'

        }}
        avatar={
          <Avatar
            src="../img/cafe.png"
            backgroundColor={'transparent'}
            size={100}
            style={{
              marginLeft: '16px'
            }}
          />
    }
      />
    </Card>

    <Card
      onClick={() => this._onClickButton('restaurant')}
      style={{
        borderRadius:'10px',
        webkitBorderRadius: '10px',
        mozBorderRadius: '10px',
        boxShadow:'none',
        backgroundColor: 'none',
        border: '2.5px solid white',
        margin: '6px 12px',
        width: '100%'
      }}
      >

      <CardHeader
        title="Food"
        titleColor="white"
        titleStyle={{
            fontWeight:'600',
            fontSize:'2em',
            lineHeight:1,
            paddingTop:'1em'
          }}
        subtitle="20 foods nearby"
        subtitleColor="white"
        subtitleStyle={{
            fontWeight:'400',
            fontSize:'1.2em'
          }}
        style={{
            padding:'0px'
          }}
        avatar={
          <Avatar
            src="../img/food.png"
            backgroundColor={'transparent'}
            size={100}
            style={{
              marginLeft: '16px'
            }}
          />
    }
      />
      </Card>
      <Card
        onClick={() => this._onClickButton('bar')}
        style={{
            borderRadius:'10px',
            webkitBorderRadius: '10px',
            mozBorderRadius: '10px',
            boxShadow:'none',
            backgroundColor: 'none',
            border: '2.5px solid white',
            margin: '6px 12px',
            width: '100%'
          }}
          >

        <CardHeader
          title="Bars"
          titleColor="white"
          titleStyle={{
            fontWeight:'600',
            fontSize:'2em',
            lineHeight:1,
            paddingTop:'1em'
          }}
          subtitle="20 bars nearby"
          subtitleColor="white"
          subtitleStyle={{
            fontWeight:'400',
            fontSize:'1.2em'
          }}
          style={{
            padding:'0px'
          }}
          avatar={
            <Avatar
              src="../img/bar.png"
              backgroundColor={'transparent'}
              size={100}
              style={{
                marginLeft: '16px'
              }}
            />
      }
        />
      </Card>

      </div>
        </MuiThemeProvider>
    );
  }


}
