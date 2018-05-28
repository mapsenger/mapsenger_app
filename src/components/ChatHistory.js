/**
 * Created by JNEP on 12/22/16.
 */
import * as React from 'react';
import * as ReactDOM from 'react-dom';
const Scroll = require('react-scroll');

const scroll = Scroll.animateScroll;

export default class ChatHistory extends React.Component {
  static propTypes = {
    history: React.PropTypes.array,
    getMarker: React.PropTypes.func,
    me: React.PropTypes.number
  };

  componentDidUpdate() {
    scroll.scrollToBottom();
  }

  _onClickButton(location) {
    this.props.getMarker(location);
  }

  render() {
    const { props } = this;
    return (
      <ul id="chatHistory" className="collection" ref="messageList">
        { props.history.map((messageObj) => {
          const imgURL = 'https://api.adorable.io/avatars/92/' + messageObj.Who;
          return (
            <div>
              {String(props.me) === String(messageObj.Who) ? (
                <li className="collection-item avatar group" style={{backgroundColor : "transparent"}}
                    key={ messageObj.When }>
                  <span className="title"> </span>
                  <p>
                    {messageObj.Where ? (
                      <div className="talk-bubble-me tri-right round right-in">
                  <span style={{fontSize:15}}>
                    {messageObj.Where.name}
                    <br/>

                      <button
                        className="chat-button"
                        onClick={() => this._onClickButton(messageObj.Where)}
                      >
                        Go to marker
                      </button></span>
                      </div>
                    ) : (
                      <div className="talk-bubble-me tri-right round right-in">
                        <span style={{fontSize:15}}>{ messageObj.What }</span>
                      </div>
                    )}
                  </p>
                </li>
              ) : (
                <li className="collection-item avatar" style={{backgroundColor : "#363636"}} key={ messageObj.When }>
                  <img src={ imgURL } alt={ messageObj.Who } className="friend-div-circle"/>
                  <span className="title"> </span>
                  <p>
                    {messageObj.Where ? (
                      <div className="talk-bubble tri-right round left-in">
                  <span style={{fontSize:15}}> I think this one is great <br/>
                    {messageObj.Where.name}
                    <br/>
                 <button
                   className="chat-button"
                   onClick={() => this._onClickButton(messageObj.Where)}
                 >
                   Go to marker
                 </button>
                  </span>
                      </div>
                    ) : (
                      <div className="talk-bubble tri-right round left-in">
                      <span style={{fontSize:15}}>{
                        messageObj.What
                      }</span>
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
