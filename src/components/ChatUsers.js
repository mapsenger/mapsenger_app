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
    $('#navbarTextSearch :input').hide();
    const listSet = '#navbarTextSearch';
    $(listSet).addClass('textSearch-transition-navbar');
    setTimeout(function() {
        this.props.focusModal('DESTINATION');
      }.bind(this),
      200);
  }

  render() {
    const { users, currentPage } = this.props;
    return (
      <div className="mui-container-fluid">
        {currentPage === 'FIRST' ? (
          <div className="mui-row online-user-list">
            <div id="navbarTextSearch" className="textSearch mui-col-md-8 mui-col-xs-8 mui-col-lg-8 mui-col-md-offset-1 mui-col-xs-offset-1 mui-col-lg-offset-1">
              <input
                    ref="txtMessage"
                     type="text"
                     onFocus={ this._onFocus.bind(this) }
                     placeholder="Search"/>
            </div>

            <div className="toggle-button-col mui-col-md-1 mui-col-xs-1 mui-col-lg-1">
              <button className="toggle-button-div-map" onClick={this._onClickButton.bind(this)}>
              </button>
            </div>
          </div>
        ) : currentPage === 'SECOND' ? (
       <div></div>
        ) : null
        }
      </div>
    );
  }
}
export default ChatUsers;
