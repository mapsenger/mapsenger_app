webpackJsonp([0],{

/***/ 0:
/*!*****************!*\
  !*** multi app ***!
  \*****************/
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(/*! ./src/index.js */1);
	module.exports = __webpack_require__(/*! webpack-hot-middleware/client */617);


/***/ },

/***/ 1:
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 10), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 18), ReactMount = __webpack_require__(/*! react-dom/lib/ReactMount */ 20), React = __webpack_require__(/*! react */ 105); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	__webpack_require__(/*! es5-shim */ 106);
	
	__webpack_require__(/*! es6-shim */ 107);
	
	__webpack_require__(/*! es6-promise */ 108);
	
	var _react = __webpack_require__(/*! react */ 105);
	
	var React = _interopRequireWildcard(_react);
	
	var _reactDom = __webpack_require__(/*! react-dom */ 110);
	
	var ReactDOM = _interopRequireWildcard(_reactDom);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 200);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 229);
	
	var _reactRouterRedux = __webpack_require__(/*! react-router-redux */ 290);
	
	var _routes = __webpack_require__(/*! ./store/routes */ 295);
	
	var _routes2 = _interopRequireDefault(_routes);
	
	var _configureStore = __webpack_require__(/*! ./store/configure-store */ 599);
	
	var _configureStore2 = _interopRequireDefault(_configureStore);
	
	__webpack_require__(/*! ./styles/index.css */ 614);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	var store = (0, _configureStore2.default)({});
	
	// Global styles
	
	var history = (0, _reactRouterRedux.syncHistoryWithStore)(_reactRouter.browserHistory, store);
	
	ReactDOM.render(React.createElement(
	  'div',
	  null,
	  React.createElement(
	    _reactRedux.Provider,
	    { store: store },
	    React.createElement(
	      _reactRouter.Router,
	      { history: history },
	      _routes2.default
	    )
	  )
	), document.getElementById('root'));
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 299); if (makeExportsHot(module, __webpack_require__(/*! react */ 105))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../~/webpack/buildin/module.js */ 2)(module), __webpack_require__(/*! ./../~/console-browserify/index.js */ 3)))

/***/ },

/***/ 109:
/*!***********************!*\
  !*** vertx (ignored) ***!
  \***********************/
/***/ function(module, exports) {

	/* (ignored) */

/***/ },

/***/ 295:
/*!*****************************!*\
  !*** ./src/store/routes.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 10), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 18), ReactMount = __webpack_require__(/*! react-dom/lib/ReactMount */ 20), React = __webpack_require__(/*! react */ 105); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(/*! react */ 105);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(/*! react-router */ 229);
	
	var _app = __webpack_require__(/*! ../containers/app */ 296);
	
	var _app2 = _interopRequireDefault(_app);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _react2.default.createElement(_reactRouter.Route, { path: '/', component: _app2.default });
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 299); if (makeExportsHot(module, __webpack_require__(/*! react */ 105))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "routes.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../~/webpack/buildin/module.js */ 2)(module), __webpack_require__(/*! ./../../~/console-browserify/index.js */ 3)))

/***/ },

/***/ 296:
/*!*******************************!*\
  !*** ./src/containers/app.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 10), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 18), ReactMount = __webpack_require__(/*! react-dom/lib/ReactMount */ 20), React = __webpack_require__(/*! react */ 105); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 105);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRedux = __webpack_require__(/*! react-redux */ 200);
	
	var _action = __webpack_require__(/*! ../action */ 297);
	
	var _ChatInput = __webpack_require__(/*! ../components/ChatInput */ 302);
	
	var _ChatInput2 = _interopRequireDefault(_ChatInput);
	
	var _ChatHistory = __webpack_require__(/*! ../components/ChatHistory */ 303);
	
	var _ChatHistory2 = _interopRequireDefault(_ChatHistory);
	
	var _ChatUsers = __webpack_require__(/*! ../components/ChatUsers */ 304);
	
	var _ChatUsers2 = _interopRequireDefault(_ChatUsers);
	
	var _GoogleMap = __webpack_require__(/*! ../components/GoogleMap */ 305);
	
	var _GoogleMap2 = _interopRequireDefault(_GoogleMap);
	
	var _SearchFunction = __webpack_require__(/*! ../components/SearchFunction */ 511);
	
	var _SearchFunction2 = _interopRequireDefault(_SearchFunction);
	
	var _oauthsimple = __webpack_require__(/*! oauthsimple */ 522);
	
	var _oauthsimple2 = _interopRequireDefault(_oauthsimple);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// import SearchCard from '../components/SearchCard';
	var Yelp = __webpack_require__(/*! yelp */ 523);
	var consumerKey = 'IwiVdMcfJ68gEJp3N8y4pQ';
	var consumerSecret = 'qG5EKwoMK8b2SmvKnKI04TNGjVw';
	var token = 'lYLlyWdVd_UM8ZxyKyMOru0WoNbytcMK';
	var tokenSecret = 'V5I3DF2WzQ70vqXNmf3gRmzxYSY';
	
	var yelp = new Yelp({
	  consumer_key: 'IwiVdMcfJ68gEJp3N8y4pQ',
	  consumer_secret: 'qG5EKwoMK8b2SmvKnKI04TNGjVw',
	  token: 'lYLlyWdVd_UM8ZxyKyMOru0WoNbytcMK',
	  token_secret: 'V5I3DF2WzQ70vqXNmf3gRmzxYSY'
	});
	
	var ID = Math.round(Math.random() * 1000000);
	var pubnub = PUBNUB.init({
	  publish_key: 'pub-c-a21b783d-ac31-4e63-b4f4-d85df580cb54',
	  subscribe_key: 'sub-c-0aaf63fc-c4ca-11e6-90ff-0619f8945a4f',
	  uuid: ID,
	  ssl: location.protocol.toLowerCase() === 'https:'
	});
	
	function mapStateToProps(state) {
	  console.log(state.app.get('markers').toJS());
	  return {
	    history: state.app.get('messages').toJS(),
	    userID: state.app.get('userID'),
	    users: state.app.get('users').toJS(),
	    markers: state.app.get('markers').toJS(),
	    send_marker: state.app.get('send_marker')
	  };
	}
	
	function mapDispatchToProps(dispatch) {
	  return {
	    addMessage: function addMessage(message) {
	      return dispatch((0, _action.addMessage)(message));
	    },
	    setUserID: function setUserID(userID) {
	      return dispatch((0, _action.setCurrentUserID)(userID));
	    },
	    addUser: function addUser(userID) {
	      return dispatch((0, _action.addUser)(userID));
	    },
	    removeUser: function removeUser(userID) {
	      return dispatch((0, _action.removeUser)(userID));
	    },
	    addMarker: function addMarker(userData) {
	      return dispatch((0, _action.addMarker)(userData));
	    }
	  };
	}
	
	var App = function (_React$Component) {
	  _inherits(App, _React$Component);
	
	  function App(props) {
	    _classCallCheck(this, App);
	
	    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));
	
	    _this.onPresenceChange = function (presenceData) {
	      switch (presenceData.action) {
	        case 'join':
	          // this.props.addUser([presenceData.uuid, presenceData.data.lat, presenceData.data.lng]);
	          if (presenceData.data) {
	            _this.props.addMarker(presenceData.data);
	          }
	          _this.props.addUser(presenceData.uuid);
	          break;
	        case 'leave':
	          _this.props.removeUser(presenceData.uuid);
	          break;
	        case 'timeout':
	          _this.props.removeUser(presenceData.uuid);
	          break;
	        default:
	          console.error('unknown action: ' + presenceData.action);
	      }
	    };
	
	    _this.leaveChat = function () {
	      pubnub.unsubscribe({ channel: 'ReactChat' });
	    };
	
	    _this.sendMessage = function (message) {
	      pubnub.publish({
	        channel: 'ReactChat',
	        message: message
	      });
	    };
	
	    _this.state = {
	      active: 'FIRST',
	      searchBar: '',
	      searchedPOI: ''
	    };
	    return _this;
	  }
	
	  _createClass(App, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      $.get('/yelp', {}, function (response) {
	        console.log(response);
	      });
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      var _this2 = this;
	
	      console.log(this.state.searchedPOI);
	      // No geo location here you said?
	      this.props.setUserID(ID);
	      navigator.geolocation.getCurrentPosition(function (position) {
	        pubnub.subscribe({
	          channel: 'ReactChat',
	          message: _this2.props.addMessage,
	          presence: _this2.onPresenceChange,
	          state: {
	            id: ID,
	            lat: position.coords.latitude,
	            lng: position.coords.longitude
	          }
	        });
	      });
	      var self = this;
	      pubnub.here_now({
	        channel: 'ReactChat',
	        state: true,
	        uuids: true,
	        callback: function callback(response) {
	          response.uuids.map(function (uuid) {
	            self.props.addMarker(uuid.state);
	          });
	        }
	      });
	      window.addEventListener('beforeunload', this.leaveChat);
	    }
	  }, {
	    key: 'componentWillUnmount',
	    value: function componentWillUnmount() {
	      this.leaveChat();
	    }
	  }, {
	    key: 'getText',
	    value: function getText(infoSearch) {
	      this.setState({ searchBar: infoSearch });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var props = this.props,
	          sendMessage = this.sendMessage,
	          state = this.state;
	
	      var active = state.active;
	      var searchPOI = state.searchBar;
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement('button', {
	          onClick: this.fetchData.bind(this)
	        }),
	        _react2.default.createElement(_ChatUsers2.default, { users: props.users,
	          searchText: this.getText.bind(this),
	          focusModal: this.openModal.bind(this),
	          toggleFunction: this.handleClick.bind(this)
	        }),
	        active === 'FIRST' ? _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(_ChatHistory2.default, { history: props.history }),
	          _react2.default.createElement(_ChatInput2.default, { userID: props.userID, sendMessage: sendMessage })
	        ) : active === 'SECOND' ? _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(_GoogleMap2.default, null)
	        ) : active === 'SEARCH' ? _react2.default.createElement(
	          'div',
	          null,
	          _react2.default.createElement(_SearchFunction2.default, null)
	        ) : active === 'SEARCH_ENTER' ? _react2.default.createElement(
	          'p',
	          null,
	          'ok'
	        )
	        // <div>
	        //  <SearchCard
	        //    textSearch={searchPOI}
	        //    POI={state.searchedPOI}
	        //  />
	        // </div>
	        : null
	      );
	    }
	  }, {
	    key: 'fetchData',
	    value: function fetchData() {
	      var url = '/yelp';
	      // fetch(url, {
	      //  method: 'GET',
	      // }).then(function(response) {
	      //  return response.json();
	      // }).then(json => {
	      //  console.log(json);
	      //  this.setState({
	      //    searchedPOI: json.results,
	      //  });
	      // }).catch(function(error) {
	      //  console.log('Error:', error);
	      // });
	    }
	  }, {
	    key: 'sendMarker',
	    value: function sendMarker(marker) {
	      console.log(marker);
	    }
	  }, {
	    key: 'handleClick',
	    value: function handleClick() {
	      var active = this.state.active;
	      console.log(active);
	      // Switch case here
	      var newActive = active === 'FIRST' ? 'SECOND' : 'FIRST';
	      console.log(newActive);
	      this.setState({
	        active: newActive
	      });
	    }
	  }, {
	    key: 'openModal',
	
	
	    //  For Modals
	    value: function openModal(dat) {
	      console.log(dat);
	      this.setState({ active: dat });
	    }
	  }]);
	
	  return App;
	}(_react2.default.Component);
	
	App.propTypes = {
	  markers: _react2.default.PropTypes.array,
	  history: _react2.default.PropTypes.array,
	  userID: _react2.default.PropTypes.number,
	  addMessage: _react2.default.PropTypes.func,
	  setUserID: _react2.default.PropTypes.func,
	  users: _react2.default.PropTypes.array,
	  addUser: _react2.default.PropTypes.func,
	  removeUser: _react2.default.PropTypes.func,
	  addMarker: _react2.default.PropTypes.func,
	  sendMarker: _react2.default.PropTypes.func
	};
	exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(App);
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 299); if (makeExportsHot(module, __webpack_require__(/*! react */ 105))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "app.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../~/webpack/buildin/module.js */ 2)(module), __webpack_require__(/*! ./../../~/console-browserify/index.js */ 3)))

/***/ },

/***/ 297:
/*!*****************************!*\
  !*** ./src/action/index.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 10), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 18), ReactMount = __webpack_require__(/*! react-dom/lib/ReactMount */ 20), React = __webpack_require__(/*! react */ 105); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.setCurrentUserID = setCurrentUserID;
	exports.addMessage = addMessage;
	exports.addUser = addUser;
	exports.removeUser = removeUser;
	exports.addMarker = addMarker;
	
	var _constants = __webpack_require__(/*! ../constants */ 298);
	
	function setCurrentUserID(userID) {
	  return {
	    type: _constants.SET_CURRENT_USERID,
	    payload: userID
	  };
	}
	
	function addMessage(message) {
	  return {
	    type: _constants.ADD_MESSAGE,
	    payload: message
	  };
	}
	
	function addUser(userID) {
	  return {
	    type: _constants.ADD_USER,
	    payload: userID
	  };
	}
	
	function removeUser(userID) {
	  return {
	    type: _constants.REMOVE_USER,
	    payload: userID
	  };
	}
	
	function addMarker(userData) {
	  return {
	    type: _constants.ADD_MARKER,
	    payload: userData
	  };
	}
	
	// export function sendMarker(marker) {
	//  return {
	//    type: SEND_MARKER,
	//    payload: marker
	//  }
	// }
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 299); if (makeExportsHot(module, __webpack_require__(/*! react */ 105))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../~/webpack/buildin/module.js */ 2)(module), __webpack_require__(/*! ./../../~/console-browserify/index.js */ 3)))

/***/ },

/***/ 298:
/*!********************************!*\
  !*** ./src/constants/index.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 10), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 18), ReactMount = __webpack_require__(/*! react-dom/lib/ReactMount */ 20), React = __webpack_require__(/*! react */ 105); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var ADD_MESSAGE = exports.ADD_MESSAGE = 'App/ADD_MESSAGE';
	var SET_CURRENT_USERID = exports.SET_CURRENT_USERID = 'App/SET_CURRENT_USERID';
	var ADD_USER = exports.ADD_USER = 'App/ADD_USER';
	var REMOVE_USER = exports.REMOVE_USER = 'App/REMOVE_USER';
	var SEND_MARKER = exports.SEND_MARKER = 'App/SEND_MARKER';
	var ADD_MARKER = exports.ADD_MARKER = 'App/ADD_MARKER';
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 299); if (makeExportsHot(module, __webpack_require__(/*! react */ 105))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../~/webpack/buildin/module.js */ 2)(module), __webpack_require__(/*! ./../../~/console-browserify/index.js */ 3)))

/***/ },

/***/ 302:
/*!*************************************!*\
  !*** ./src/components/ChatInput.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 10), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 18), ReactMount = __webpack_require__(/*! react-dom/lib/ReactMount */ 20), React = __webpack_require__(/*! react */ 105); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 105);
	
	var React = _interopRequireWildcard(_react);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by JNEP on 12/22/16.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
	var ChatInput = function (_React$Component) {
	  _inherits(ChatInput, _React$Component);
	
	  function ChatInput() {
	    var _ref;
	
	    var _temp, _this, _ret;
	
	    _classCallCheck(this, ChatInput);
	
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ChatInput.__proto__ || Object.getPrototypeOf(ChatInput)).call.apply(_ref, [this].concat(args))), _this), _this.onSubmit = function (e) {
	      e.preventDefault();
	      var message = _this.refs.txtMessage.value;
	      if (message.length === 0) {
	        return;
	      }
	      var messageObj = {
	        Who: _this.props.userID,
	        What: message,
	        When: new Date().valueOf()
	      };
	      _this.props.sendMessage(messageObj);
	      _this.refs.txtMessage.value = '';
	      _this.refs.txtMessage.focus();
	    }, _temp), _possibleConstructorReturn(_this, _ret);
	  }
	
	  _createClass(ChatInput, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.refs.txtMessage.focus();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var props = this.props,
	          onSubmit = this.onSubmit;
	
	      var imgURL = 'https://api.adorable.io/avatars/92/' + props.userID;
	      // Check if the message is empty
	      return React.createElement(
	        'footer',
	        { className: 'teal' },
	        React.createElement(
	          'form',
	          { className: 'container', onSubmit: onSubmit },
	          React.createElement(
	            'div',
	            { className: 'row' },
	            React.createElement(
	              'div',
	              { className: 'input-field col s10' },
	              React.createElement('i', { className: 'prefix mdi-communication-chat' }),
	              React.createElement('input', { ref: 'txtMessage', type: 'text', placeholder: 'Type your message' }),
	              React.createElement(
	                'span',
	                { className: 'chip left' },
	                React.createElement('img', { src: imgURL }),
	                React.createElement(
	                  'span',
	                  null,
	                  'Anonymous robot #',
	                  props.userID
	                )
	              )
	            ),
	            React.createElement(
	              'div',
	              { className: 'input-field col s2' },
	              React.createElement(
	                'button',
	                { type: 'submit', className: 'waves-effect waves-light btn-floating btn-large' },
	                React.createElement('i', { className: 'mdi-content-send' })
	              )
	            )
	          )
	        )
	      );
	    }
	  }]);
	
	  return ChatInput;
	}(React.Component);
	
	ChatInput.propTypes = {
	  userID: React.PropTypes.number,
	  sendMessage: React.PropTypes.func
	};
	exports.default = ChatInput;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 299); if (makeExportsHot(module, __webpack_require__(/*! react */ 105))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "ChatInput.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../~/webpack/buildin/module.js */ 2)(module), __webpack_require__(/*! ./../../~/console-browserify/index.js */ 3)))

/***/ },

/***/ 303:
/*!***************************************!*\
  !*** ./src/components/ChatHistory.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 10), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 18), ReactMount = __webpack_require__(/*! react-dom/lib/ReactMount */ 20), React = __webpack_require__(/*! react */ 105); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 105);
	
	var React = _interopRequireWildcard(_react);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by JNEP on 12/22/16.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
	var ChatHistory = function (_React$Component) {
	  _inherits(ChatHistory, _React$Component);
	
	  function ChatHistory() {
	    _classCallCheck(this, ChatHistory);
	
	    return _possibleConstructorReturn(this, (ChatHistory.__proto__ || Object.getPrototypeOf(ChatHistory)).apply(this, arguments));
	  }
	
	  _createClass(ChatHistory, [{
	    key: 'render',
	    value: function render() {
	      var props = this.props;
	
	      return React.createElement(
	        'ul',
	        { className: 'collection' },
	        props.history.map(function (messageObj) {
	          var imgURL = 'https://api.adorable.io/avatars/92/' + messageObj.Who;
	          var messageDate = new Date(messageObj.When);
	          var messageDateTime = messageDate.toLocaleDateString() + ' at ' + messageDate.toLocaleTimeString();
	          return React.createElement(
	            'li',
	            { className: 'collection-item avatar', key: messageObj.When },
	            React.createElement('img', { src: imgURL, alt: messageObj.Who, className: 'circle' }),
	            React.createElement(
	              'span',
	              { className: 'title' },
	              'Anonymous robot #',
	              messageObj.Who
	            ),
	            React.createElement(
	              'p',
	              null,
	              React.createElement('i', { className: 'prefix mdi-action-alarm' }),
	              React.createElement(
	                'span',
	                { className: 'message-date' },
	                messageDateTime
	              ),
	              React.createElement('br', null),
	              React.createElement(
	                'span',
	                null,
	                messageObj.What
	              )
	            )
	          );
	        })
	      );
	    }
	  }]);
	
	  return ChatHistory;
	}(React.Component);
	
	ChatHistory.propTypes = {
	  history: React.PropTypes.array
	};
	exports.default = ChatHistory;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 299); if (makeExportsHot(module, __webpack_require__(/*! react */ 105))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "ChatHistory.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../~/webpack/buildin/module.js */ 2)(module), __webpack_require__(/*! ./../../~/console-browserify/index.js */ 3)))

/***/ },

/***/ 304:
/*!*************************************!*\
  !*** ./src/components/ChatUsers.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 10), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 18), ReactMount = __webpack_require__(/*! react-dom/lib/ReactMount */ 20), React = __webpack_require__(/*! react */ 105); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 105);
	
	var React = _interopRequireWildcard(_react);
	
	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by JNEP on 1/14/17.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
	var ChatUsers = function (_React$Component) {
	  _inherits(ChatUsers, _React$Component);
	
	  function ChatUsers(props) {
	    _classCallCheck(this, ChatUsers);
	
	    var _this = _possibleConstructorReturn(this, (ChatUsers.__proto__ || Object.getPrototypeOf(ChatUsers)).call(this, props));
	
	    _this.state = {
	      toggleFunction: props.toggleFunction,
	      focus: props.focusModal
	    };
	    return _this;
	  }
	
	  _createClass(ChatUsers, [{
	    key: '_onClickButton',
	    value: function _onClickButton() {
	      this.props.toggleFunction();
	    }
	  }, {
	    key: '_onFocus',
	    value: function _onFocus() {
	      this.props.focusModal('SEARCH');
	    }
	  }, {
	    key: '_onSubmit',
	    value: function _onSubmit(e) {
	      if (e.key === 'Enter') {
	        var message = this.refs.txtMessage.value;
	        this.props.focusModal('SEARCH_ENTER');
	        this.props.searchText(message);
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var users = this.props.users;
	
	      return React.createElement(
	        'div',
	        { className: 'online-user-list lg-col-12' },
	        React.createElement(
	          'div',
	          { className: 'online-users-number valign-wrapper lg-col-10' },
	          React.createElement(
	            'i',
	            { className: 'material-icons' },
	            'people'
	          ),
	          React.createElement(
	            'span',
	            { className: 'valign' },
	            users.length,
	            ' online'
	          )
	        ),
	        React.createElement(
	          'ul',
	          null,
	          users.map(function (userID) {
	            var name = 'Anonymous Robot #' + userID;
	            var imgURL = 'https://api.adorable.io/avatars/92/' + userID;
	            return React.createElement(
	              'li',
	              { key: userID },
	              React.createElement('img', { title: name, alt: name, src: imgURL, className: 'circle' })
	            );
	          })
	        ),
	        React.createElement('input', { ref: 'txtMessage',
	          type: 'text',
	          onFocus: this._onFocus.bind(this),
	          onKeyPress: this._onSubmit.bind(this),
	          placeholder: 'Type your message' }),
	        React.createElement(
	          'button',
	          { type: 'button', onClick: this._onClickButton.bind(this) },
	          'Toggle'
	        )
	      );
	    }
	  }]);
	
	  return ChatUsers;
	}(React.Component);
	
	ChatUsers.propTypes = {
	  users: React.PropTypes.array,
	  toggleFunction: React.PropTypes.func,
	  focusModal: React.PropTypes.func,
	  searchText: React.PropTypes.func
	};
	exports.default = ChatUsers;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 299); if (makeExportsHot(module, __webpack_require__(/*! react */ 105))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "ChatUsers.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../~/webpack/buildin/module.js */ 2)(module), __webpack_require__(/*! ./../../~/console-browserify/index.js */ 3)))

/***/ },

/***/ 305:
/*!*************************************!*\
  !*** ./src/components/GoogleMap.js ***!
  \*************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 10), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 18), ReactMount = __webpack_require__(/*! react-dom/lib/ReactMount */ 20), React = __webpack_require__(/*! react */ 105); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 105);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactLeaflet = __webpack_require__(/*! react-leaflet */ 306);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by JNEP on 1/30/17.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
	var GoogleMap = function (_Component) {
	  _inherits(GoogleMap, _Component);
	
	  function GoogleMap() {
	    _classCallCheck(this, GoogleMap);
	
	    var _this = _possibleConstructorReturn(this, (GoogleMap.__proto__ || Object.getPrototypeOf(GoogleMap)).call(this));
	
	    _this.state = {
	      lat: 51.505,
	      lng: -0.09,
	      zoom: 13
	    };
	    return _this;
	  }
	
	  _createClass(GoogleMap, [{
	    key: 'render',
	    value: function render() {
	      var position = [this.state.lat, this.state.lng];
	      return _react2.default.createElement(
	        _reactLeaflet.Map,
	        {
	          style: { height: '100vh' },
	          center: position,
	          zoom: 10 },
	        _react2.default.createElement(_reactLeaflet.TileLayer, {
	          url: 'https://api.mapbox.com/styles/v1/junep1009/ciyjx3eah000i2skuw54czps9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoianVuZXAxMDA5IiwiYSI6ImNpaTFpbXZhMjAwYXFzd2txaWhwZWg0MGkifQ.zVbpTuEmpLzyRasVFfkysQ',
	          attribution: '<attribution>' })
	      );
	    }
	  }]);
	
	  return GoogleMap;
	}(_react.Component);
	
	exports.default = GoogleMap;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 299); if (makeExportsHot(module, __webpack_require__(/*! react */ 105))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "GoogleMap.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../~/webpack/buildin/module.js */ 2)(module), __webpack_require__(/*! ./../../~/console-browserify/index.js */ 3)))

/***/ },

/***/ 511:
/*!******************************************!*\
  !*** ./src/components/SearchFunction.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 10), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 18), ReactMount = __webpack_require__(/*! react-dom/lib/ReactMount */ 20), React = __webpack_require__(/*! react */ 105); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(/*! react */ 105);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactModal = __webpack_require__(/*! react-modal */ 512);
	
	var _reactModal2 = _interopRequireDefault(_reactModal);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by JNEP on 1/28/17.
	                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
	
	
	var customStyles = {
	  content: {
	    top: '50%',
	    left: '50%',
	    right: 'auto',
	    bottom: 'auto',
	    marginRight: '-50%',
	    transform: 'translate(-50%, -50%)'
	  }
	};
	
	var SearchCard = function (_Component) {
	  _inherits(SearchCard, _Component);
	
	  function SearchCard(props) {
	    _classCallCheck(this, SearchCard);
	
	    var _this = _possibleConstructorReturn(this, (SearchCard.__proto__ || Object.getPrototypeOf(SearchCard)).call(this, props));
	
	    _this.state = {
	      modalIsOpen: false
	    };
	    return _this;
	  }
	
	  _createClass(SearchCard, [{
	    key: 'componentWillMount',
	    value: function componentWillMount() {
	      console.log('Search card is coming!');
	    }
	  }, {
	    key: 'componentDidMount',
	    value: function componentDidMount() {}
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(
	          'button',
	          { onClick: this.openModal.bind(this) },
	          'Open Modal'
	        ),
	        _react2.default.createElement(
	          _reactModal2.default,
	          {
	            isOpen: this.state.modalIsOpen,
	            onAfterOpen: this.afterOpenModal.bind(this),
	            onRequestClose: this.closeModal.bind(this),
	            style: customStyles,
	            contentLabel: 'Example Modal'
	          },
	          _react2.default.createElement(
	            'h2',
	            { ref: 'subtitle' },
	            'Hello'
	          ),
	          _react2.default.createElement(
	            'button',
	            { onClick: this.closeModal.bind(this) },
	            'close'
	          ),
	          _react2.default.createElement(
	            'div',
	            null,
	            'I am a modal'
	          ),
	          _react2.default.createElement(
	            'form',
	            null,
	            _react2.default.createElement('input', null),
	            _react2.default.createElement(
	              'button',
	              null,
	              'tab navigation'
	            ),
	            _react2.default.createElement(
	              'button',
	              null,
	              'stays'
	            ),
	            _react2.default.createElement(
	              'button',
	              null,
	              'inside'
	            ),
	            _react2.default.createElement(
	              'button',
	              null,
	              'the modal'
	            )
	          )
	        )
	      );
	    }
	  }, {
	    key: 'openModal',
	    value: function openModal() {
	      this.setState({ modalIsOpen: true });
	    }
	  }, {
	    key: 'afterOpenModal',
	    value: function afterOpenModal() {
	      // references are now sync'd and can be accessed.
	      this.refs.subtitle.style.color = '#f00';
	    }
	  }, {
	    key: 'closeModal',
	    value: function closeModal() {
	      this.setState({ modalIsOpen: false });
	    }
	  }]);
	
	  return SearchCard;
	}(_react.Component);
	
	SearchCard.propTypes = {};
	exports.default = SearchCard;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 299); if (makeExportsHot(module, __webpack_require__(/*! react */ 105))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "SearchFunction.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../~/webpack/buildin/module.js */ 2)(module), __webpack_require__(/*! ./../../~/console-browserify/index.js */ 3)))

/***/ },

/***/ 536:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ function(module, exports) {

	/* (ignored) */

/***/ },

/***/ 561:
/*!**********************!*\
  !*** util (ignored) ***!
  \**********************/
/***/ function(module, exports) {

	/* (ignored) */

/***/ },

/***/ 599:
/*!**************************************!*\
  !*** ./src/store/configure-store.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 10), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 18), ReactMount = __webpack_require__(/*! react-dom/lib/ReactMount */ 20), React = __webpack_require__(/*! react */ 105); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _redux = __webpack_require__(/*! redux */ 207);
	
	var _reduxThunk = __webpack_require__(/*! redux-thunk */ 600);
	
	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
	
	var _promiseMiddleware = __webpack_require__(/*! ../middleware/promise-middleware */ 601);
	
	var _promiseMiddleware2 = _interopRequireDefault(_promiseMiddleware);
	
	var _logger = __webpack_require__(/*! ./logger */ 603);
	
	var _logger2 = _interopRequireDefault(_logger);
	
	var _reducers = __webpack_require__(/*! ../reducers */ 612);
	
	var _reducers2 = _interopRequireDefault(_reducers);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function configureStore(initialState) {
	  var store = _redux.compose.apply(undefined, [_getMiddleware()].concat(_toConsumableArray(_getEnhancers())))(_redux.createStore)(_reducers2.default, initialState);
	
	  _enableHotLoader(store);
	  return store;
	}
	
	function _getMiddleware() {
	  var middleware = [_promiseMiddleware2.default, _reduxThunk2.default];
	
	  if (true) {
	    middleware = [].concat(_toConsumableArray(middleware), [_logger2.default]);
	  }
	
	  return _redux.applyMiddleware.apply(undefined, _toConsumableArray(middleware));
	}
	
	function _getEnhancers() {
	  var enhancers = [];
	
	  if ((true) && window.devToolsExtension) {
	    enhancers = [].concat(_toConsumableArray(enhancers), [window.devToolsExtension()]);
	  }
	
	  return enhancers;
	}
	
	function _enableHotLoader(store) {
	  if (true) {
	    module.hot.accept(/*! ../reducers */ 612, function () {
	      var nextRootReducer = __webpack_require__(/*! ../reducers */ 612);
	      store.replaceReducer(nextRootReducer);
	    });
	  }
	}
	
	exports.default = configureStore;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 299); if (makeExportsHot(module, __webpack_require__(/*! react */ 105))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "configure-store.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../~/webpack/buildin/module.js */ 2)(module), __webpack_require__(/*! ./../../~/console-browserify/index.js */ 3)))

/***/ },

/***/ 601:
/*!**********************************************!*\
  !*** ./src/middleware/promise-middleware.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 10), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 18), ReactMount = __webpack_require__(/*! react-dom/lib/ReactMount */ 20), React = __webpack_require__(/*! react */ 105); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	exports.default = promiseMiddleware;
	
	var _isPromise = __webpack_require__(/*! ../utils/is-promise */ 602);
	
	var _isPromise2 = _interopRequireDefault(_isPromise);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function promiseMiddleware(_ref) {
	  var dispatch = _ref.dispatch;
	
	  return function (next) {
	    return function (action) {
	      if (!(0, _isPromise2.default)(action.payload)) {
	        return next(action);
	      }
	
	      var types = action.types,
	          payload = action.payload,
	          meta = action.meta;
	      var promise = payload.promise,
	          data = payload.data;
	
	      var _types = _slicedToArray(types, 3),
	          PENDING = _types[0],
	          FULFILLED = _types[1],
	          REJECTED = _types[2];
	
	      /**
	       * Dispatch the pending action
	       */
	
	
	      dispatch(_extends({
	        type: PENDING
	      }, data && { payload: data }, meta && { meta: meta }));
	
	      /**
	       * If successful, dispatch the fulfilled action, otherwise dispatch
	       * rejected action.
	       */
	      return promise.then(function (result) {
	        dispatch({
	          type: FULFILLED,
	          payload: result,
	          meta: meta
	        });
	      }, function (error) {
	        dispatch({
	          type: REJECTED,
	          payload: error,
	          meta: meta
	        });
	      });
	    };
	  };
	}
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 299); if (makeExportsHot(module, __webpack_require__(/*! react */ 105))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "promise-middleware.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../~/webpack/buildin/module.js */ 2)(module), __webpack_require__(/*! ./../../~/console-browserify/index.js */ 3)))

/***/ },

/***/ 602:
/*!*********************************!*\
  !*** ./src/utils/is-promise.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 10), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 18), ReactMount = __webpack_require__(/*! react-dom/lib/ReactMount */ 20), React = __webpack_require__(/*! react */ 105); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	exports.default = isPromise;
	/**
	 * Returns whether the provided value is a promise
	 *
	 * @param {object} value Potential promise
	 * @return {Boolean}
	 */
	function isPromise(value) {
	  return !!value && _typeof(value.promise) === 'object' && typeof value.promise.then === 'function';
	}
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 299); if (makeExportsHot(module, __webpack_require__(/*! react */ 105))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "is-promise.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../~/webpack/buildin/module.js */ 2)(module), __webpack_require__(/*! ./../../~/console-browserify/index.js */ 3)))

/***/ },

/***/ 603:
/*!*****************************!*\
  !*** ./src/store/logger.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 10), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 18), ReactMount = __webpack_require__(/*! react-dom/lib/ReactMount */ 20), React = __webpack_require__(/*! react */ 105); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _reduxLogger = __webpack_require__(/*! redux-logger */ 604);
	
	var _reduxLogger2 = _interopRequireDefault(_reduxLogger);
	
	var _immutableToJs = __webpack_require__(/*! ../utils/immutable-to-js */ 610);
	
	var _immutableToJs2 = _interopRequireDefault(_immutableToJs);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = (0, _reduxLogger2.default)({
	  collapsed: true,
	  logger: console,
	  stateTransformer: function stateTransformer(state) {
	    return (0, _immutableToJs2.default)(state);
	  }
	});
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 299); if (makeExportsHot(module, __webpack_require__(/*! react */ 105))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "logger.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../~/webpack/buildin/module.js */ 2)(module), __webpack_require__(/*! ./../../~/console-browserify/index.js */ 3)))

/***/ },

/***/ 610:
/*!**************************************!*\
  !*** ./src/utils/immutable-to-js.js ***!
  \**************************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 10), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 18), ReactMount = __webpack_require__(/*! react-dom/lib/ReactMount */ 20), React = __webpack_require__(/*! react */ 105); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = immutableToJS;
	
	var _immutable = __webpack_require__(/*! immutable */ 611);
	
	/**
	 * [immutableToJS
	 *    converts properties of the provided [state] object from immutable
	 *    data structures to regular JavaScript data structures - used with
	 *    redux-logger
	 *
	 * @param  {object} state [state reference]
	 * @return {object}       [transformed state]
	 */
	function immutableToJS(state) {
	  return Object.keys(state).reduce(function (newState, key) {
	    var val = state[key];
	    newState[key] = _immutable.Iterable.isIterable(val) ? val.toJS() : val;
	    return newState;
	  }, {});
	}
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 299); if (makeExportsHot(module, __webpack_require__(/*! react */ 105))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "immutable-to-js.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../~/webpack/buildin/module.js */ 2)(module), __webpack_require__(/*! ./../../~/console-browserify/index.js */ 3)))

/***/ },

/***/ 612:
/*!*******************************!*\
  !*** ./src/reducers/index.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 10), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 18), ReactMount = __webpack_require__(/*! react-dom/lib/ReactMount */ 20), React = __webpack_require__(/*! react */ 105); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _redux = __webpack_require__(/*! redux */ 207);
	
	var _reactRouterRedux = __webpack_require__(/*! react-router-redux */ 290);
	
	var _app = __webpack_require__(/*! ./app */ 613);
	
	var _app2 = _interopRequireDefault(_app);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var rootReducer = (0, _redux.combineReducers)({
	  routing: _reactRouterRedux.routerReducer,
	  app: _app2.default
	});
	
	exports.default = rootReducer;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 299); if (makeExportsHot(module, __webpack_require__(/*! react */ 105))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "index.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../~/webpack/buildin/module.js */ 2)(module), __webpack_require__(/*! ./../../~/console-browserify/index.js */ 3)))

/***/ },

/***/ 613:
/*!*****************************!*\
  !*** ./src/reducers/app.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module, console) {/* REACT HOT LOADER */ if (true) { (function () { var ReactHotAPI = __webpack_require__(/*! ./~/react-hot-api/modules/index.js */ 10), RootInstanceProvider = __webpack_require__(/*! ./~/react-hot-loader/RootInstanceProvider.js */ 18), ReactMount = __webpack_require__(/*! react-dom/lib/ReactMount */ 20), React = __webpack_require__(/*! react */ 105); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _constants = __webpack_require__(/*! ../constants */ 298);
	
	var _immutable = __webpack_require__(/*! immutable */ 611);
	
	var INITIAL_STATE = (0, _immutable.fromJS)({
	  userID: 0,
	  messages: [],
	  users: [],
	  markers: []
	});
	
	function appReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
	  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	
	  switch (action.type) {
	    case _constants.SET_CURRENT_USERID:
	      return state.update('userID', function () {
	        return action.payload;
	      });
	    case _constants.ADD_MESSAGE:
	      return state.update('messages', function (messages) {
	        return messages.concat(action.payload);
	      });
	    case _constants.ADD_USER:
	      return state.update('users', function (users) {
	        return users.indexOf(action.payload) >= 0 ? users : users.push(action.payload);
	      }
	      //  (users.map((el) => el[0]).indexOf(action.payload[0]) >= 0 ?
	      // users : users.push(action.payload))
	      // (users.findIndex(el => el[0] === action.payload[0]) >= 0 ?
	      // users : users.push(action.payload))
	      // Original
	      );
	    case _constants.ADD_MARKER:
	      return state.update('markers', function (markers) {
	        return markers.push(action.payload);
	      });
	    case _constants.REMOVE_USER:
	      return state.update('users', function (users) {
	        return users.delete(action.payload);
	      });
	    case _constants.SEND_MARKER:
	      return state;
	    default:
	      return state;
	  }
	}
	exports.default = appReducer;
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (true) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = __webpack_require__(/*! ./~/react-hot-loader/makeExportsHot.js */ 299); if (makeExportsHot(module, __webpack_require__(/*! react */ 105))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot apply hot update to " + "app.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! ./../../~/webpack/buildin/module.js */ 2)(module), __webpack_require__(/*! ./../../~/console-browserify/index.js */ 3)))

/***/ },

/***/ 614:
/*!******************************!*\
  !*** ./src/styles/index.css ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(/*! !./../../~/raw-loader!./index.css */ 615);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(/*! ./../../~/style-loader/addStyles.js */ 616)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(true) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept(/*! !./../../~/raw-loader!./index.css */ 615, function() {
				var newContent = __webpack_require__(/*! !./../../~/raw-loader!./index.css */ 615);
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 615:
/*!*********************************************!*\
  !*** ./~/raw-loader!./src/styles/index.css ***!
  \*********************************************/
/***/ function(module, exports) {

	module.exports = "/* Application specific CSS */\n\nfooter {\n  color: white;\n  position: fixed;\n  padding: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 130px;\n}\n\nfooter .input-field input,\nbutton {\n  border-color: #FFFFFF;\n}\n\n.chip {\n  font-style: italic;\n}\n\n/* ChatHistory styles */\n\n.collection {\n  margin-bottom: 130px;\n  margin-top: -1px;\n}\n\n.message-date {\n  color: #585858;\n}\n\nbody {\n  background: #EEEEEE;\n}\n\n.message-container {\n  height: 100vh;\n  flex-direction: column;\n}\n.message-container, .message-form {\n  display: flex;\n}\n.message-form {\n  flex: 1;\n  max-height: 136px;\n  background-color: #009688 !important;\n  color: white;\n}\n.message-list {\n  flex: 1;\n  overflow: auto;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.message-form .input-field input {\n  border-color: #FFFFFF;\n}\n.chip {\n  font-style: italic;\n}\n.mdi-communication-chat {\n  color: white;\n}\n.collection .collection-item:last-child {\n  border-bottom: 0.1em solid #DCDCDC;\n}\n/* -------- Online user list ---------- */\n.online-user-list, .online-user-list ul {\n  display: flex;\n}\n.online-user-list {\n  margin: 0;\n  height: 68px;\n  background-color: #009688 !important;\n}\n.online-user-list ul {\n  flex: 1;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  margin: 5px;\n}\n.online-user-list li{\n  display: inline-block;\n}\n.online-user-list img{\n  margin: 4px;\n  width: 50px;\n}\n.online-users-number{\n  color: white;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n.online-users-number i{\n  font-size: 50px;\n  padding-right: 10px;\n}\n\n"

/***/ }

});
//# sourceMappingURL=app.ec64eb9b2afd0e5f1529.js.map