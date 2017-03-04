/**
 * Created by JNEP on 12/22/16.
 */
import * as React from 'react';
export default class ChatHistory extends React.Component {
  static propTypes = {
    history: React.PropTypes.array,
    getMarker: React.PropTypes.func,
    me: React.PropTypes.number
  };

  _onClickButton(location) {
    this.props.getMarker(location);
  }

  render() {
    const {props} = this;
    return (<ul className="collection">
      { props.history.map((messageObj) => {
        const imgURL = 'https://api.adorable.io/avatars/92/' + messageObj.Who;
        return (
          <div>
            {String(props.me) === String(messageObj.Who) ? (
              <li className="collection-item avatar" style={{backgroundColor : "#eeeeee"}} key={ messageObj.When }>
                <div>
                  <span className="title"> </span>
                  {messageObj.Where ? (
                    <div className="talk-bubble-me tri-right right-in">
                  <span style={{fontSize:15}}>
                    {messageObj.Where.name}
                    <br/>
                  </span>
                      <button
                        className="chat-button"
                        onClick={() => this._onClickButton(messageObj.Where)}
                      >
                        Go to marker
                      </button>
                    </div>
                  ) : (
                    <div className="talk-bubble-me tri-right right-in">
                      <span style={{fontSize:15}}>{ messageObj.What }</span>
                    </div>
                  )}
                </div>
              </li>
            ) : (
              <li className="collection-item avatar" style={{backgroundColor : "#363636"}} key={ messageObj.When }>
                <img src={ imgURL } alt={ messageObj.Who } className="circle"/>
                <span className="title"> </span>
                <p>
                  {messageObj.Where ? (
                    <div className="talk-bubble tri-right left-in">
                  <span style={{fontSize:15}}> I think this one is great <br/>
                    {messageObj.Where.name}
                    <br/>
                 <button
                   onClick={() => this._onClickButton(messageObj.Where)}
                 >
                   Go to marker
                 </button>
                  </span>
                    </div>
                  ) : (
                    <div className="talk-bubble tri-right left-in">
                      <span style={{fontSize:15}}>{ messageObj.What }</span>
                    </div>
                  )}
                </p>
              </li>
            )
            }
          </div>
        );
      })
      }
    </ul>);
  }
}
