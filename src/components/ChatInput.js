/**
 * Created by JNEP on 12/22/16.
 */
import * as React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

export default class ChatInput extends React.Component {

  static propTypes = {
    userID: React.PropTypes.number,
    sendMessage: React.PropTypes.func,
  };


  onSubmit = (e) => {
    e.preventDefault();
    const message = this.refs.txtMessage.value;
    if (message.length === 0) {
      return;
    }
    const messageObj = {
      Who: this.props.userID,
      What: message,
      When: new Date().valueOf(),
      Type: 'message'
    };
    this.props.sendMessage(messageObj);
    this.refs.txtMessage.value = '';
    this.refs.txtMessage.focus();
  };

  render() {
    const {onSubmit} = this;
    return (
  <MuiThemeProvider>
      <footer className="blackFooter">
      <form className="container" onSubmit={ onSubmit }>
        <div className="row">
          <div className="input-field col s9">
            <input style={{height:'2.5em'}} ref="txtMessage" type="text" placeholder="Type your message"/>
          </div>
          <div className="input-field col s3">
            <RaisedButton
              backgroundColor="#6359df"
              type="submit"
              labelColor="#fff"
              label="SEND"  style={{
      minWidth: '60px',
      pading: '0px 0px',
      margin: '0 auto',
      color: '#fff'
    }}
               />
          </div>
        </div>
      </form>
    </footer>
  </MuiThemeProvider>
  );
  }
}
