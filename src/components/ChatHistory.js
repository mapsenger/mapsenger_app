/**
 * Created by JNEP on 12/22/16.
 */
import * as React from 'react';
export default class ChatHistory extends React.Component {
  static propTypes = {
    history: React.PropTypes.array,
    getMarker: React.PropTypes.func,
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
          <li className="collection-item avatar" key={ messageObj.When }>
            <img src={ imgURL } alt={ messageObj.Who } className="circle"/>
            <span className="title">Anonymous robot #{ messageObj.Who }</span>
            <p>
              {messageObj.Where ? (
                <span>
                  <p>I think this one is great</p>
                  <b>{messageObj.Where.name}</b>
                   <br/>
                <button
                  onClick={() => this._onClickButton(messageObj.Where)}
                >
                  Go to marker
                </button>
              </span>
              ) : (
                  <span>{ messageObj.What }</span>
              )}
            </p>
          </li>
        );
      })
      }
    </ul>);
  }
}
