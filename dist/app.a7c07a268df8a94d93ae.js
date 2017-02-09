webpackJsonp([1],{0:function(e,t,n){e.exports=n(254)},142:function(e,t,n){try{(function(){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ADD_MESSAGE="App/ADD_MESSAGE",t.SET_CURRENT_USERID="App/SET_CURRENT_USERID",t.ADD_USER="App/ADD_USER",t.REMOVE_USER="App/REMOVE_USER",t.SEND_MARKER="App/SEND_MARKER",t.ADD_MARKER="App/ADD_MARKER"}).call(this)}finally{}},246:function(e,t){e.exports="/* Application specific CSS */\n\nfooter {\n  color: white;\n  position: fixed;\n  padding: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 130px;\n}\n\nfooter .input-field input,\nbutton {\n  border-color: #FFFFFF;\n}\n\n.chip {\n  font-style: italic;\n}\n\n/* ChatHistory styles */\n\n.collection {\n  margin-bottom: 130px;\n  margin-top: -1px;\n}\n\n.message-date {\n  color: #585858;\n}\n\nbody {\n  background: #EEEEEE;\n}\n\n.message-container {\n  height: 100vh;\n  flex-direction: column;\n}\n.message-container, .message-form {\n  display: flex;\n}\n.message-form {\n  flex: 1;\n  max-height: 136px;\n  background-color: #009688 !important;\n  color: white;\n}\n.message-list {\n  flex: 1;\n  overflow: auto;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.message-form .input-field input {\n  border-color: #FFFFFF;\n}\n.chip {\n  font-style: italic;\n}\n.mdi-communication-chat {\n  color: white;\n}\n.collection .collection-item:last-child {\n  border-bottom: 0.1em solid #DCDCDC;\n}\n/* -------- Online user list ---------- */\n.online-user-list, .online-user-list ul {\n  display: flex;\n}\n.online-user-list {\n  margin: 0;\n  height: 68px;\n  background-color: #009688 !important;\n}\n.online-user-list ul {\n  flex: 1;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  margin: 5px;\n}\n.online-user-list li{\n  display: inline-block;\n}\n.online-user-list img{\n  margin: 4px;\n  width: 50px;\n}\n.online-users-number{\n  color: white;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n.online-users-number i{\n  font-size: 50px;\n  padding-right: 10px;\n}\n\n"},247:function(e,t,n){try{(function(){"use strict";function e(e){return{type:u.SET_CURRENT_USERID,payload:e}}function r(e){return{type:u.ADD_MESSAGE,payload:e}}function o(e){return{type:u.ADD_USER,payload:e}}function a(e){return{type:u.REMOVE_USER,payload:e}}function l(e){return{type:u.ADD_MARKER,payload:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.setCurrentUserID=e,t.addMessage=r,t.addUser=o,t.removeUser=a,t.addMarker=l;var u=n(142)}).call(this)}finally{}},248:function(e,t,n){try{(function(){"use strict";function e(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(1),i=e(u),s=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),l(t,[{key:"render",value:function(){var e=this.props;return i.createElement("ul",{className:"collection"},e.history.map(function(e){var t="https://api.adorable.io/avatars/92/"+e.Who,n=new Date(e.When),r=n.toLocaleDateString()+" at "+n.toLocaleTimeString();return i.createElement("li",{className:"collection-item avatar",key:e.When},i.createElement("img",{src:t,alt:e.Who,className:"circle"}),i.createElement("span",{className:"title"},"Anonymous robot #",e.Who),i.createElement("p",null,i.createElement("i",{className:"prefix mdi-action-alarm"}),i.createElement("span",{className:"message-date"},r),i.createElement("br",null),i.createElement("span",null,e.What)))}))}}]),t}(i.Component);s.propTypes={history:i.PropTypes.array},t.default=s}).call(this)}finally{}},249:function(e,t,n){try{(function(){"use strict";function e(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(1),i=e(u),s=function(e){function t(){var e,n,a,l;r(this,t);for(var u=arguments.length,i=Array(u),s=0;s<u;s++)i[s]=arguments[s];return n=a=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),a.onSubmit=function(e){e.preventDefault();var t=a.refs.txtMessage.value;if(0!==t.length){var n={Who:a.props.userID,What:t,When:(new Date).valueOf()};a.props.sendMessage(n),a.refs.txtMessage.value="",a.refs.txtMessage.focus()}},l=n,o(a,l)}return a(t,e),l(t,[{key:"componentDidMount",value:function(){this.refs.txtMessage.focus()}},{key:"render",value:function(){var e=this.props,t=this.onSubmit,n="https://api.adorable.io/avatars/92/"+e.userID;return i.createElement("footer",{className:"teal"},i.createElement("form",{className:"container",onSubmit:t},i.createElement("div",{className:"row"},i.createElement("div",{className:"input-field col s10"},i.createElement("i",{className:"prefix mdi-communication-chat"}),i.createElement("input",{ref:"txtMessage",type:"text",placeholder:"Type your message"}),i.createElement("span",{className:"chip left"},i.createElement("img",{src:n}),i.createElement("span",null,"Anonymous robot #",e.userID))),i.createElement("div",{className:"input-field col s2"},i.createElement("button",{type:"submit",className:"waves-effect waves-light btn-floating btn-large"},i.createElement("i",{className:"mdi-content-send"}))))))}}]),t}(i.Component);s.propTypes={userID:i.PropTypes.number,sendMessage:i.PropTypes.func},t.default=s}).call(this)}finally{}},250:function(e,t,n){try{(function(){"use strict";function e(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(1),i=e(u),s=function(e){function t(e){r(this,t);var n=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={toggleFunction:e.toggleFunction,focus:e.focusModal},n}return a(t,e),l(t,[{key:"_onClickButton",value:function(){this.props.toggleFunction()}},{key:"_onFocus",value:function(){this.props.focusModal("SEARCH")}},{key:"_onSubmit",value:function(e){if("Enter"===e.key){var t=this.refs.txtMessage.value;this.props.focusModal("SEARCH_ENTER"),this.props.searchText(t)}}},{key:"render",value:function(){var e=this.props.users;return i.createElement("div",{className:"online-user-list lg-col-12"},i.createElement("div",{className:"online-users-number valign-wrapper lg-col-10"},i.createElement("i",{className:"material-icons"},"people"),i.createElement("span",{className:"valign"},e.length," online")),i.createElement("ul",null,e.map(function(e){var t="Anonymous Robot #"+e,n="https://api.adorable.io/avatars/92/"+e;return i.createElement("li",{key:e},i.createElement("img",{title:t,alt:t,src:n,className:"circle"}))})),i.createElement("input",{ref:"txtMessage",type:"text",onFocus:this._onFocus.bind(this),onKeyPress:this._onSubmit.bind(this),placeholder:"Type your message"}),i.createElement("button",{type:"button",onClick:this._onClickButton.bind(this)},"Toggle"))}}]),t}(i.Component);s.propTypes={users:i.PropTypes.array,toggleFunction:i.PropTypes.func,focusModal:i.PropTypes.func,searchText:i.PropTypes.func},t.default=s}).call(this)}finally{}},251:function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),u=n(1),i=e(u),s=n(504),c=function(e){function t(){r(this,t);var e=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.state={lat:51.505,lng:-.09,zoom:13},e}return a(t,e),l(t,[{key:"render",value:function(){var e=[this.state.lat,this.state.lng];return i.default.createElement(s.Map,{style:{height:"100vh"},center:e,zoom:10},i.default.createElement(s.TileLayer,{url:"https://api.mapbox.com/styles/v1/junep1009/ciyjx3eah000i2skuw54czps9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoianVuZXAxMDA5IiwiYSI6ImNpaTFpbXZhMjAwYXFzd2txaWhwZWg0MGkifQ.zVbpTuEmpLzyRasVFfkysQ",attribution:"<attribution>"}))}}]),t}(u.Component);t.default=c}).call(this)}finally{}},252:function(e,t,n){(function(e){try{(function(){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(1),s=r(i),c=n(511),f=r(c),p={content:{top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)"}},d=function(t){function n(e){o(this,n);var t=a(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={modalIsOpen:!1},t}return l(n,t),u(n,[{key:"componentWillMount",value:function(){e.log("Search card is coming!")}},{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return s.default.createElement("div",null,s.default.createElement("button",{onClick:this.openModal.bind(this)},"Open Modal"),s.default.createElement(f.default,{isOpen:this.state.modalIsOpen,onAfterOpen:this.afterOpenModal.bind(this),onRequestClose:this.closeModal.bind(this),style:p,contentLabel:"Example Modal"},s.default.createElement("h2",{ref:"subtitle"},"Hello"),s.default.createElement("button",{onClick:this.closeModal.bind(this)},"close"),s.default.createElement("div",null,"I am a modal"),s.default.createElement("form",null,s.default.createElement("input",null),s.default.createElement("button",null,"tab navigation"),s.default.createElement("button",null,"stays"),s.default.createElement("button",null,"inside"),s.default.createElement("button",null,"the modal"))))}},{key:"openModal",value:function(){this.setState({modalIsOpen:!0})}},{key:"afterOpenModal",value:function(){this.refs.subtitle.style.color="#f00"}},{key:"closeModal",value:function(){this.setState({modalIsOpen:!1})}}]),n}(i.Component);d.propTypes={},t.default=d}).call(this)}finally{}}).call(t,n(12))},253:function(e,t,n){(function(e){try{(function(){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(t){return e.log(t.app.get("markers").toJS()),{history:t.app.get("messages").toJS(),userID:t.app.get("userID"),users:t.app.get("users").toJS(),markers:t.app.get("markers").toJS(),send_marker:t.app.get("send_marker")}}function i(e){return{addMessage:function(t){return e((0,d.addMessage)(t))},setUserID:function(t){return e((0,d.setCurrentUserID)(t))},addUser:function(t){return e((0,d.addUser)(t))},removeUser:function(t){return e((0,d.removeUser)(t))},addMarker:function(t){return e((0,d.addMarker)(t))}}}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(1),f=r(c),p=n(218),d=n(247),y=n(249),m=r(y),h=n(248),b=r(h),v=n(250),g=r(v),_=n(251),E=r(_),M=n(252),O=r(M),w=n(585);w.baseUrl="/yelp";var k=(new w({consumer_key:"IwiVdMcfJ68gEJp3N8y4pQ",consumer_secret:"qG5EKwoMK8b2SmvKnKI04TNGjVw",token:"lYLlyWdVd_UM8ZxyKyMOru0WoNbytcMK",token_secret:"V5I3DF2WzQ70vqXNmf3gRmzxYSY"}),Math.round(1e6*Math.random())),S=PUBNUB.init({publish_key:"pub-c-a21b783d-ac31-4e63-b4f4-d85df580cb54",subscribe_key:"sub-c-0aaf63fc-c4ca-11e6-90ff-0619f8945a4f",uuid:k,ssl:"https:"===location.protocol.toLowerCase()}),P=function(t){function n(t){o(this,n);var r=a(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,t));return r.onPresenceChange=function(t){switch(t.action){case"join":t.data&&r.props.addMarker(t.data),r.props.addUser(t.uuid);break;case"leave":r.props.removeUser(t.uuid);break;case"timeout":r.props.removeUser(t.uuid);break;default:e.error("unknown action: "+t.action)}},r.leaveChat=function(){S.unsubscribe({channel:"ReactChat"})},r.sendMessage=function(e){S.publish({channel:"ReactChat",message:e})},r.state={active:"FIRST",searchBar:"",searchedPOI:""},r}return l(n,t),s(n,[{key:"componentWillMount",value:function(){$.get("/yelp",function(t){e.log(t)})}},{key:"componentDidMount",value:function(){var t=this;e.log(this.state.searchedPOI),this.props.setUserID(k),navigator.geolocation.getCurrentPosition(function(e){S.subscribe({channel:"ReactChat",message:t.props.addMessage,presence:t.onPresenceChange,state:{id:k,lat:e.coords.latitude,lng:e.coords.longitude}})});var n=this;S.here_now({channel:"ReactChat",state:!0,uuids:!0,callback:function(e){e.uuids.map(function(e){n.props.addMarker(e.state)})}}),window.addEventListener("beforeunload",this.leaveChat)}},{key:"componentWillUnmount",value:function(){this.leaveChat()}},{key:"getText",value:function(e){this.setState({searchBar:e})}},{key:"render",value:function(){var e=this.props,t=this.sendMessage,n=this.state,r=n.active;return n.searchBar,f.default.createElement("div",null,f.default.createElement("button",{onClick:this.fetchData.bind(this)}),f.default.createElement(g.default,{users:e.users,searchText:this.getText.bind(this),focusModal:this.openModal.bind(this),toggleFunction:this.handleClick.bind(this)}),"FIRST"===r?f.default.createElement("div",null,f.default.createElement(b.default,{history:e.history}),f.default.createElement(m.default,{userID:e.userID,sendMessage:t})):"SECOND"===r?f.default.createElement("div",null,f.default.createElement(E.default,null)):"SEARCH"===r?f.default.createElement("div",null,f.default.createElement(O.default,null)):"SEARCH_ENTER"===r?f.default.createElement("p",null,"ok"):null)}},{key:"fetchData",value:function(){}},{key:"sendMarker",value:function(t){e.log(t)}},{key:"handleClick",value:function(){var t=this.state.active;e.log(t);var n="FIRST"===t?"SECOND":"FIRST";e.log(n),this.setState({active:n})}},{key:"openModal",value:function(t){e.log(t),this.setState({active:t})}}]),n}(f.default.Component);P.propTypes={markers:f.default.PropTypes.array,history:f.default.PropTypes.array,userID:f.default.PropTypes.number,addMessage:f.default.PropTypes.func,setUserID:f.default.PropTypes.func,users:f.default.PropTypes.array,addUser:f.default.PropTypes.func,removeUser:f.default.PropTypes.func,addMarker:f.default.PropTypes.func,sendMarker:f.default.PropTypes.func},t.default=(0,p.connect)(u,i)(P)}).call(this)}finally{}}).call(t,n(12))},254:function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function t(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}n(280),n(282),n(281);var r=n(1),o=t(r),a=n(53),l=t(a),u=n(218),i=n(229),s=n(222),c=n(260),f=e(c),p=n(258),d=e(p);n(587);var y=(0,d.default)({}),m=(0,s.syncHistoryWithStore)(i.browserHistory,y);l.render(o.createElement("div",null,o.createElement(u.Provider,{store:y},o.createElement(i.Router,{history:m},f.default))),document.getElementById("root"))}).call(this)}finally{}},255:function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=e.dispatch;return function(e){return function(n){if(!(0,u.default)(n.payload))return e(n);var r=n.types,l=n.payload,i=n.meta,s=l.promise,c=l.data,f=a(r,3),p=f[0],d=f[1],y=f[2];return t(o({type:p},c&&{payload:c},i&&{meta:i})),s.then(function(e){t({type:d,payload:e,meta:i})},function(e){t({type:y,payload:e,meta:i})})}}}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var l,u=e[Symbol.iterator]();!(r=(l=u.next()).done)&&(n.push(l.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{!r&&u.return&&u.return()}finally{if(o)throw a}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();t.default=r;var l=n(262),u=e(l)}).call(this)}finally{}},256:function(e,t,n){try{(function(){"use strict";function e(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case r.SET_CURRENT_USERID:return e.update("userID",function(){return t.payload});case r.ADD_MESSAGE:return e.update("messages",function(e){return e.concat(t.payload)});case r.ADD_USER:return e.update("users",function(e){return e.indexOf(t.payload)>=0?e:e.push(t.payload)});case r.ADD_MARKER:return e.update("markers",function(e){return e.push(t.payload)});case r.REMOVE_USER:return e.update("users",function(e){return e.delete(t.payload)});case r.SEND_MARKER:return e;default:return e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(142),o=n(162),a=(0,o.fromJS)({userID:0,messages:[],users:[],markers:[]});t.default=e}).call(this)}finally{}},257:function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(139),o=n(222),a=n(256),l=e(a),u=(0,r.combineReducers)({routing:o.routerReducer,app:l.default});t.default=u}).call(this)}finally{}},258:function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e){var t=i.compose.apply(void 0,[a()].concat(r(l())))(i.createStore)(m.default,e);return u(t),t}function a(){var e=[p.default,c.default];return i.applyMiddleware.apply(void 0,r(e))}function l(){var e=[];return e}function u(e){}Object.defineProperty(t,"__esModule",{value:!0});var i=n(139),s=n(559),c=e(s),f=n(255),p=e(f),d=n(259),y=(e(d),n(257)),m=e(y);t.default=o}).call(this)}finally{}},259:function(e,t,n){(function(e){try{(function(){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(558),a=r(o),l=n(261),u=r(l);t.default=(0,a.default)({collapsed:!0,logger:e,stateTransformer:function(e){return(0,u.default)(e)}})}).call(this)}finally{}}).call(t,n(12))},260:function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),o=e(r),a=n(229),l=n(253),u=e(l);t.default=o.default.createElement(a.Route,{path:"/",component:u.default})}).call(this)}finally{}},261:function(e,t,n){try{(function(){"use strict";function e(e){return Object.keys(e).reduce(function(t,n){var o=e[n];return t[n]=r.Iterable.isIterable(o)?o.toJS():o,t},{})}Object.defineProperty(t,"__esModule",{value:!0}),t.default=e;var r=n(162)}).call(this)}finally{}},262:function(e,t,n){try{(function(){"use strict";function e(e){return!!e&&"object"===n(e.promise)&&"function"==typeof e.promise.then}Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=e}).call(this)}finally{}},587:function(e,t,n){var r=n(246);"string"==typeof r&&(r=[[e.id,r,""]]),n(573)(r,{}),r.locals&&(e.exports=r.locals)},588:function(e,t){},589:function(e,t){},590:function(e,t){}});
//# sourceMappingURL=app.a7c07a268df8a94d93ae.js.map