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
    currentPage: React.PropTypes.string,
    handleAnimation: React.PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = {
      focus: props.focusModal,
      focusText: 'Search'
    };
  }

  _onClickButton() {
    if (this.props.currentPage === 'SEARCH_MAP') {
      this.props.handleAnimation(true);
      setTimeout(function() {
          this.props.toggleFunction('SEARCH_ENTER');
        }.bind(this),
        700);
    } else if (this.props.currentPage === 'SEARCH_ENTER') {
      this.props.toggleFunction('SEARCH_ENTER');
    }
  }

  _onClickBackButton() {
    if (this.props.currentPage === 'SEARCH') {
      const listSet = '#SearchNavBar';
      const inputNav = '#textInputSearchNav';
      $(listSet).addClass('navbar-transition-search');
      // $(inputNav).addClass('textSearch-search-nav-transition');
      setTimeout(function () {
          this.props.backButton();
        }.bind(this),
        200);
    } else {
      this.props.backButton();
    }
  }

  _onFocus() {
    this.props.focusModal('SEARCH');
  }

  _onSubmit(e) {
    if (e.key === 'Enter') {
      console.log(this.props.searchText);
      const message = this.refs.txtMessage.value;
      this.refs.txtMessage.blur();
      this.props.searchText(message);
    }
  }

  render() {
    const { currentPage } = this.props;
    return (
      <div className="mui-container-fluid">
        {currentPage === 'SEARCH_ENTER' ? (
          <div className="mui-row seach-navbar">
            <div className="online-users-number valign-wrapper mui-col-md-1 mui-col-xs-1 mui-col-lg-1">
              <button className="button-back"
                      onClick={this._onClickBackButton.bind(this)}>
              </button>
            </div>
            <div className="textSearch-search-nav mui-col-md-8 mui-col-xs-8 mui-col-lg-8">
              <input autoFocus
                     id="input_search_bar"
                     ref="txtMessage"
                     type="text"
                     onFocus={ this._onFocus.bind(this) }
                     onKeyPress={this._onSubmit.bind(this)}
                     placeholder={this.state.focusText}/>
            </div>
            <div className="mui-col-md-1 mui-col-xs-1 mui-col-lg-1">
              <button className="search-button-div-map"
                      type="button" onClick={this._onClickButton.bind(this)}>
              </button>
            </div>
          </div>
        ) : currentPage === 'SEARCH' ?
          (
            <div id="SearchNavBar" className="mui-row seach-navbar">
              <div className="online-users-number valign-wrapper mui-col-md-1 mui-col-xs-1 mui-col-lg-1">
                <button className="button-back"
                        onClick={this._onClickBackButton.bind(this)}>
                </button>
              </div>
              <div id="textInputSearchNav" className="textSearch-search-nav mui-col-md-8 mui-col-xs-8 mui-col-lg-8">
                <input autoFocus
                       ref="txtMessage"
                       type="text"
                       id="input_search_bar"
                       onFocus={ this._onFocus.bind(this) }
                       onKeyPress={this._onSubmit.bind(this)}
                       placeholder={this.state.focusText}/>
              </div>
            </div>
          ) : currentPage === 'SEARCH_MAP' ?
          (
            <div className="mui-row seach-navbar">
              <div className="online-users-number valign-wrapper mui-col-md-1 mui-col-xs-1 mui-col-lg-1">
                <button className="button-back"
                        onClick={this._onClickBackButton.bind(this)}>
                </button>
              </div>
              <div className="textSearch-search-nav mui-col-md-8 mui-col-xs-8 mui-col-lg-8">
                <input autoFocus
                       id="input_search_bar"
                       ref="txtMessage"
                       type="text"
                       onFocus={ this._onFocus.bind(this) }
                       onKeyPress={this._onSubmit.bind(this)}
                       placeholder="Search"/>
              </div>
              <div className="mui-col-md-1 mui-col-xs-1 mui-col-lg-1 ">
                <button
                  className="search-button-div-list"
                  type="button" onClick={this._onClickButton.bind(this)}>
                </button>
              </div>
            </div>
          ) : null
        }

      </div>
    );
  }
}
export default SearchNavBar;
