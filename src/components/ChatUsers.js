/**
 * Created by JNEP on 1/14/17.
 */
import * as React from 'react';
class ChatUsers extends React.Component {
  static propTypes = {
    users: React.PropTypes.array,
  }

  render() {
    const { users } = this.props;
    return (
      <div className="online-user-list">
        <div className="online-users-number valign-wrapper">
          <i className="material-icons">people</i>
          <span className="valign">{ users.length } online</span>
        </div>
        <ul>{
          users.map((userID) => {
            const name = 'Anonymous Robot #' + userID;
            const imgURL = 'https://api.adorable.io/avatars/92/' + userID;
            return (
              <li key={ userID }>
                <img title={ name } alt={ name } src={ imgURL } className="circle" />
              </li>
            );
          })
        }</ul>
      </div>
    );
  }
}
export default ChatUsers;
