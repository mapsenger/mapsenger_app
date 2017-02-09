/**
 * Created by JNEP on 1/14/17.
 */
import * as React from 'react';
class ChatUsers extends React.Component {
  static propTypes = {
    users: React.PropTypes.array,
    toggleFunction: React.PropTypes.func,
    focusModal: React.PropTypes.func,
    currentPage: React.PropTypes.string
  }

  constructor(props) {
    super(props);
    this.state = {
      toggleFunction: props.toggleFunction,
      focus: props.focusModal,
    };
  }

  _onClickButton() {
    this.props.toggleFunction();
  }

  _onFocus() {
    this.props.focusModal('DESTINATION');
  }

  render() {
    const { users, currentPage } = this.props;
    return (
      <div className="mui-container-fluid">
        <div className="mui-row online-user-list">
          <div className="online-users-number valign-wrapper mui-col-md-1 mui-col-xs-2 mui-col-lg-1">
            <span className="valign">{ users.length } online</span>
          </div>
          <div className="textSearch mui-col-md-10 mui-col-xs-7 mui-col-lg-10">
            <input ref="txtMessage"
                   type="text"
                   onFocus={ this._onFocus.bind(this) }
                   placeholder="Search"/>
          </div>
          <div className="toggle-button-col mui-col-md-1 mui-col-xs-2 mui-col-lg-1">
            {currentPage === 'FIRST' ? (
              <button className="toggle-button-div-chat" onClick={this._onClickButton.bind(this)}>
              </button>
            ) : currentPage === 'SECOND' ? (
              <button className="toggle-button-div-chat" onClick={this._onClickButton.bind(this)}>
              </button>
            ) : null
            }
          </div>
        </div>
      </div>
    );
  }
}
export default ChatUsers;
