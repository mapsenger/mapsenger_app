/**
 * Created by JNEP on 12/22/16.
 */
import * as React from 'react';
export default class ChatHistory extends React.Component {
  static propTypes = {
    history: React.PropTypes.array,
  };

  render() {
    const {props} = this;
    return (<ul className="collection">
      { props.history.map((messageObj) => {
        const imgURL = 'https://api.adorable.io/avatars/92/' + messageObj.Who;
        const messageDate = new Date(messageObj.When);
        const messageDateTime = messageDate.toLocaleDateString() + ' at ' + messageDate.toLocaleTimeString();
        return (
          <li className="collection-item avatar" key={ messageObj.When }>
            <img src={ imgURL } alt={ messageObj.Who } className="circle"/>
            <span className="title">Anonymous robot #{ messageObj.Who }</span>
            <p>
              <i className="prefix mdi-action-alarm"/>
              <span className="message-date">{ messageDateTime }</span>
              <br />
              <span>{ messageObj.What }</span>
            </p>
          </li>
        );
      })
      }
    </ul>);
  }
}
