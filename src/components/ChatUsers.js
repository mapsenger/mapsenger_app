/**
 * Created by JNEP on 1/14/17.
 */
import * as React from 'react';
class ChatUsers extends React.Component {
  static propTypes = {
    users: React.PropTypes.array,
    toggleFunction: React.PropTypes.func,
    current: React.PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {
      toggleFunction: props.toggleFunction,
      current: props.current,
      focus: 'None',
    };
  }

  _onClickButton() {
    const active = this.state.current;
    console.log('User active ,', active);
    const newActive = active === 'FIRST' ? 'SECOND' : 'FIRST';
    console.log('User new active ,', newActive);
    this.props.toggleFunction(newActive);
  }

  _onFocus() {
    console.log('yes');
  }

  render() {
    const { users } = this.props;
    return (
      <div className="online-user-list lg-col-12">
        <div className="online-users-number valign-wrapper lg-col-10">
          <i className="material-icons">people</i>
          <span className="valign">{ users.length } online</span>
        </div>

        <ul>{
          users.map((userID) => {
            const name = 'Anonymous Robot #' + userID;
            const imgURL = 'https://api.adorable.io/avatars/92/' + userID;
            return (
              <li key={ userID }>
                <img title={ name } alt={ name } src={ imgURL } className="circle"/>
              </li>
            );
          })
        }
        </ul>
        <input ref="txtMessage" type="text" onFocus={ this._onFocus } placeholder="Type your message"/>
        <button type="button" onClick={this._onClickButton.bind(this)}>
          Toggle
        </button>
      </div>
    );
  }
}
export default ChatUsers;
