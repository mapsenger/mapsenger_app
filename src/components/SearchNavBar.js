/**
 * Created by JNEP on 2/1/17.
 */
/**
 * Created by JNEP on 1/14/17.
 */
import * as React from 'react';

class SearchNavBar extends React.Component {
  static propTypes = {
    backButton: React.PropTypes.func,
    toggleFunction: React.PropTypes.func,
    focusModal: React.PropTypes.func,
    searchText: React.PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {
      focus: props.focusModal,
    };
  }

  _onClickButton() {
    this.props.toggleFunction('SEARCH_ENTER');
  }

  _onClickBackButton() {
    this.props.backButton();
  }

  _onFocus() {
    this.props.focusModal('SEARCH');
  }

  _onSubmit(e) {
    if (e.key === 'Enter') {
      const message = this.refs.txtMessage.value;
      this.props.searchText(message);
    }
  }

  render() {
    return (
      <div className="online-user-list lg-col-12">
        <button type="button" onClick={this._onClickBackButton.bind(this)}>
          Back
        </button>
        <input autoFocus
          ref="txtMessage"
          type="text"
          onFocus={ this._onFocus.bind(this) }
          onKeyPress={this._onSubmit.bind(this)}
          placeholder="Search"/>
        <button type="button" onClick={this._onClickButton.bind(this)}>
          Toggle
        </button>
      </div>
    );
  }
}
export default SearchNavBar;
