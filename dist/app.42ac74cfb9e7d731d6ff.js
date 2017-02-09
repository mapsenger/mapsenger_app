webpackJsonp([1],{0:function(e,t,n){e.exports=n(191)},92:function(e,t,n){try{(function(){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ADD_MESSAGE="App/ADD_MESSAGE",t.SET_CURRENT_USERID="App/SET_CURRENT_USERID",t.ADD_USER="App/ADD_USER",t.REMOVE_USER="App/REMOVE_USER"}).call(this)}finally{}},185:function(e,t){e.exports="/* Application specific CSS */\n\nfooter {\n  color: white;\n  position: fixed;\n  padding: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 130px;\n}\n\nfooter .input-field input,\nbutton {\n  border-color: #FFFFFF;\n}\n\n.chip {\n  font-style: italic;\n}\n\n/* ChatHistory styles */\n\n.collection {\n  margin-bottom: 130px;\n  margin-top: -1px;\n}\n\n.message-date {\n  color: #585858;\n}\n\nbody {\n  background: #EEEEEE;\n}\n\n.message-container {\n  height: 100vh;\n  flex-direction: column;\n}\n.message-container, .message-form {\n  display: flex;\n}\n.message-form {\n  flex: 1;\n  max-height: 136px;\n  background-color: #009688 !important;\n  color: white;\n}\n.message-list {\n  flex: 1;\n  overflow: auto;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.message-form .input-field input {\n  border-color: #FFFFFF;\n}\n.chip {\n  font-style: italic;\n}\n.mdi-communication-chat {\n  color: white;\n}\n.collection .collection-item:last-child {\n  border-bottom: 0.1em solid #DCDCDC;\n}\n/* -------- Online user list ---------- */\n.online-user-list, .online-user-list ul {\n  display: flex;\n}\n.online-user-list {\n  margin: 0;\n  height: 68px;\n  background-color: #009688 !important;\n}\n.online-user-list ul {\n  flex: 1;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  margin: 5px;\n}\n.online-user-list li{\n  display: inline-block;\n}\n.online-user-list img{\n  margin: 4px;\n  width: 50px;\n}\n.online-users-number{\n  color: white;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n.online-users-number i{\n  font-size: 50px;\n  padding-right: 10px;\n}\n\n"},186:function(e,t,n){try{(function(){"use strict";function e(e){return{type:u.SET_CURRENT_USERID,payload:e}}function r(e){return{type:u.ADD_MESSAGE,payload:e}}function o(e){return{type:u.ADD_USER,payload:e}}function a(e){return{type:u.REMOVE_USER,payload:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.setCurrentUserID=e,t.addMessage=r,t.addUser=o,t.removeUser=a;var u=n(92)}).call(this)}finally{}},187:function(e,t,n){try{(function(){"use strict";function e(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(3),l=e(i),s=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),u(t,[{key:"render",value:function(){var e=this.props;return l.createElement("ul",{className:"collection"},e.history.map(function(e){var t="https://api.adorable.io/avatars/92/"+e.Who,n=new Date(e.When),r=n.toLocaleDateString()+" at "+n.toLocaleTimeString();return l.createElement("li",{className:"collection-item avatar",key:e.When},l.createElement("img",{src:t,alt:e.Who,className:"circle"}),l.createElement("span",{className:"title"},"Anonymous robot #",e.Who),l.createElement("p",null,l.createElement("i",{className:"prefix mdi-action-alarm"}),l.createElement("span",{className:"message-date"},r),l.createElement("br",null),l.createElement("span",null,e.What)))}))}}]),t}(l.Component);s.propTypes={history:l.PropTypes.array},t.default=s}).call(this)}finally{}},188:function(e,t,n){try{(function(){"use strict";function e(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(3),l=e(i),s=function(e){function t(){var e,n,a,u;r(this,t);for(var i=arguments.length,l=Array(i),s=0;s<i;s++)l[s]=arguments[s];return n=a=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),a.onSubmit=function(e){e.preventDefault();var t=a.refs.txtMessage.value;if(0!==t.length){var n={Who:a.props.userID,What:t,When:(new Date).valueOf()};a.props.sendMessage(n),a.refs.txtMessage.value="",a.refs.txtMessage.focus()}},u=n,o(a,u)}return a(t,e),u(t,[{key:"componentDidMount",value:function(){this.refs.txtMessage.focus()}},{key:"render",value:function(){var e=this.props,t=this.onSubmit,n="https://api.adorable.io/avatars/92/"+e.userID;return l.createElement("footer",{className:"teal"},l.createElement("form",{className:"container",onSubmit:t},l.createElement("div",{className:"row"},l.createElement("div",{className:"input-field col s10"},l.createElement("i",{className:"prefix mdi-communication-chat"}),l.createElement("input",{ref:"txtMessage",type:"text",placeholder:"Type your message"}),l.createElement("span",{className:"chip left"},l.createElement("img",{src:n}),l.createElement("span",null,"Anonymous robot #",e.userID))),l.createElement("div",{className:"input-field col s2"},l.createElement("button",{type:"submit",className:"waves-effect waves-light btn-floating btn-large"},l.createElement("i",{className:"mdi-content-send"}))))))}}]),t}(l.Component);s.propTypes={userID:l.PropTypes.number,sendMessage:l.PropTypes.func},t.default=s}).call(this)}finally{}},189:function(e,t,n){(function(e){try{(function(){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(324),c=o(s),f=n(3),p=r(f);navigator.geolocation.watchPosition(function(t){e.log(t)});var d=function(e){function t(e){a(this,t);var n=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={lat:47.6553,lng:-122.3035},n}return i(t,e),l(t,[{key:"componentWillMount",value:function(){this.setState({lat:47.6553,lng:-122.3035})}},{key:"render",value:function(){return p.createElement(c.default,{mapboxApiAccessToken:"pk.eyJ1IjoianVuZXAxMDA5IiwiYSI6ImNpaTFpbXZhMjAwYXFzd2txaWhwZWg0MGkifQ.zVbpTuEmpLzyRasVFfkysQ",width:"100%",height:"100vh",latitude:this.state.lat,longitude:this.state.lng,zoom:14})}}]),t}(p.Component);t.default=d}).call(this)}finally{}}).call(t,n(11))},190:function(e,t,n){(function(e){try{(function(){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(t){return e.log(t.app.get("userID")),e.log(t.app.get("users").toJS()),{history:t.app.get("messages").toJS(),userID:t.app.get("userID"),users:t.app.get("users").toJS()}}function l(e){return{addMessage:function(t){return e((0,d.addMessage)(t))},setUserID:function(t){return e((0,d.setCurrentUserID)(t))},addUser:function(t){return e((0,d.addUser)(t))},removeUser:function(t){return e((0,d.removeUser)(t))}}}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(3),f=r(c),p=n(129),d=n(186),y=n(188),m=r(y),h=n(187),b=r(h),v=n(189),g=r(v),_=function(t){function n(){var t,r,u,i;o(this,n);for(var l=arguments.length,s=Array(l),c=0;c<l;c++)s[c]=arguments[c];return r=u=a(this,(t=n.__proto__||Object.getPrototypeOf(n)).call.apply(t,[this].concat(s))),u.onPresenceChange=function(t){switch(e.log("WORKKKKKKK"),t.action){case"join":u.props.addUser(t.uuid);break;case"leave":u.props.removeUser(t.uuid);break;case"timeout":u.props.removeUser(t.uuid);break;default:e.error("unknown action: "+t.action)}},u.leaveChat=function(){u.PubNub.unsubscribe({channel:"ReactChat"})},u.sendMessage=function(e){u.PubNub.publish({channel:"ReactChat",message:e})},i=r,a(u,i)}return u(n,t),s(n,[{key:"componentDidMount",value:function(){var e=Math.round(1e6*Math.random());this.props.setUserID(e),this.props.addUser(e),this.PubNub=PUBNUB.init({publish_key:"pub-c-a21b783d-ac31-4e63-b4f4-d85df580cb54",subscribe_key:"sub-c-0aaf63fc-c4ca-11e6-90ff-0619f8945a4f",uuid:e,ssl:"https:"===location.protocol.toLowerCase()}),this.PubNub.subscribe({channel:"ReactChat",message:this.props.addMessage,presence:this.onPresenceChange}),window.addEventListener("beforeunload",this.leaveChat)}},{key:"componentWillUnmount",value:function(){this.leaveChat()}},{key:"render",value:function(){var e=this.props,t=this.sendMessage;return f.default.createElement("div",null,f.default.createElement(g.default,null),f.default.createElement(b.default,{history:e.history}),f.default.createElement(m.default,{userID:e.userID,sendMessage:t}))}}]),n}(f.default.Component);_.propTypes={history:f.default.PropTypes.array,userID:f.default.PropTypes.number,addMessage:f.default.PropTypes.func,setUserID:f.default.PropTypes.func,users:f.default.PropTypes.array,addUser:f.default.PropTypes.func,removeUser:f.default.PropTypes.func},t.default=(0,p.connect)(i,l)(_)}).call(this)}finally{}}).call(t,n(11))},191:function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function t(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}n(215),n(217),n(216);var r=n(3),o=t(r),a=n(246),u=t(a),i=n(129),l=n(140),s=n(133),c=n(197),f=e(c),p=n(195),d=e(p);n(381);var y=(0,d.default)({}),m=(0,s.syncHistoryWithStore)(l.browserHistory,y);u.render(o.createElement("div",null,o.createElement(i.Provider,{store:y},o.createElement(l.Router,{history:m},f.default))),document.getElementById("root"))}).call(this)}finally{}},192:function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=e.dispatch;return function(e){return function(n){if(!(0,i.default)(n.payload))return e(n);var r=n.types,u=n.payload,l=n.meta,s=u.promise,c=u.data,f=a(r,3),p=f[0],d=f[1],y=f[2];return t(o({type:p},c&&{payload:c},l&&{meta:l})),s.then(function(e){t({type:d,payload:e,meta:l})},function(e){t({type:y,payload:e,meta:l})})}}}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var u,i=e[Symbol.iterator]();!(r=(u=i.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{!r&&i.return&&i.return()}finally{if(o)throw a}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();t.default=r;var u=n(199),i=e(u)}).call(this)}finally{}},193:function(e,t,n){try{(function(){"use strict";function e(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case r.SET_CURRENT_USERID:return e.update("userID",function(){return t.payload});case r.ADD_MESSAGE:return e.update("messages",function(e){return e.concat(t.payload)});case r.ADD_USER:return e.update("users",function(e){return e.indexOf(t.payload)>=0?e:e.concat(t.payload)});case r.REMOVE_USER:return e.update("users",function(e){return e.delete(t.payload)});default:return e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(92),o=n(24),a=(0,o.fromJS)({userID:0,messages:[],users:[]});t.default=e}).call(this)}finally{}},194:function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(84),o=n(133),a=n(193),u=e(a),i=(0,r.combineReducers)({routing:o.routerReducer,app:u.default});t.default=i}).call(this)}finally{}},195:function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e){var t=l.compose.apply(void 0,[a()].concat(r(u())))(l.createStore)(m.default,e);return i(t),t}function a(){var e=[p.default,c.default];return l.applyMiddleware.apply(void 0,r(e))}function u(){var e=[];return e}function i(e){}Object.defineProperty(t,"__esModule",{value:!0});var l=n(84),s=n(368),c=e(s),f=n(192),p=e(f),d=n(196),y=(e(d),n(194)),m=e(y);t.default=o}).call(this)}finally{}},196:function(e,t,n){(function(e){try{(function(){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(367),a=r(o),u=n(198),i=r(u);t.default=(0,a.default)({collapsed:!0,logger:e,stateTransformer:function(e){return(0,i.default)(e)}})}).call(this)}finally{}}).call(t,n(11))},197:function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(3),o=e(r),a=n(140),u=n(190),i=e(u);t.default=o.default.createElement(a.Route,{path:"/",component:i.default})}).call(this)}finally{}},198:function(e,t,n){try{(function(){"use strict";function e(e){return Object.keys(e).reduce(function(t,n){var o=e[n];return t[n]=r.Iterable.isIterable(o)?o.toJS():o,t},{})}Object.defineProperty(t,"__esModule",{value:!0}),t.default=e;var r=n(24)}).call(this)}finally{}},199:function(e,t,n){try{(function(){"use strict";function e(e){return!!e&&"object"===n(e.promise)&&"function"==typeof e.promise.then}Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=e}).call(this)}finally{}},381:function(e,t,n){var r=n(185);"string"==typeof r&&(r=[[e.id,r,""]]),n(373)(r,{}),r.locals&&(e.exports=r.locals)},384:function(e,t){},385:function(e,t){}});
//# sourceMappingURL=app.42ac74cfb9e7d731d6ff.js.map