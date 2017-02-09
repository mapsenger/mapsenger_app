webpackJsonp([1],{0:function(e,t,n){e.exports=n(343)},338:function(e,t){e.exports="/* Application specific CSS */\n\nfooter {\n  color: white;\n  position: fixed;\n  padding: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 130px;\n}\n\nfooter .input-field input,\nbutton {\n  border-color: #FFFFFF;\n}\n\n.chip {\n  font-style: italic;\n}\n\n/* ChatHistory styles */\n\n.collection {\n  margin-bottom: 130px;\n  margin-top: -1px;\n}\n\n.message-date {\n  color: #585858;\n}\n\nbody {\n  background: #EEEEEE;\n}\n"},339:function(e,t,n){try{(function(){"use strict";function e(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(4),l=e(i),c=function(e){function t(){return r(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),u(t,[{key:"render",value:function(){var e=this.props;return l.createElement("ul",{className:"collection"},e.history.map(function(e){var t="https://api.adorable.io/avatars/92/"+e.Who,n=new Date(e.When),r=n.toLocaleDateString()+" at "+n.toLocaleTimeString();return l.createElement("li",{className:"collection-item avatar",key:e.When},l.createElement("img",{src:t,alt:e.Who,className:"circle"}),l.createElement("span",{className:"title"},"Anonymous robot #",e.Who),l.createElement("p",null,l.createElement("i",{className:"prefix mdi-action-alarm"}),l.createElement("span",{className:"message-date"},r),l.createElement("br",null),l.createElement("span",null,e.What)))}))}}]),t}(l.Component);c.propTypes={history:l.PropTypes.array},t.default=c}).call(this)}finally{}},340:function(e,t,n){try{(function(){"use strict";function e(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=n(4),l=e(i),c=function(e){function t(){var e,n,a,u;r(this,t);for(var i=arguments.length,l=Array(i),c=0;c<i;c++)l[c]=arguments[c];return n=a=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),a.onSubmit=function(e){e.preventDefault();var t=a.refs.txtMessage.value;if(0!==t.length){var n={Who:a.props.userID,What:t,When:(new Date).valueOf()};a.props.sendMessage(n),a.refs.txtMessage.value="",a.refs.txtMessage.focus()}},u=n,o(a,u)}return a(t,e),u(t,[{key:"componentDidMount",value:function(){this.refs.txtMessage.focus()}},{key:"render",value:function(){var e=this.props,t=this.onSubmit,n="https://api.adorable.io/avatars/92/"+e.userID;return l.createElement("footer",{className:"teal"},l.createElement("form",{className:"container",onSubmit:t},l.createElement("div",{className:"row"},l.createElement("div",{className:"input-field col s10"},l.createElement("i",{className:"prefix mdi-communication-chat"}),l.createElement("input",{ref:"txtMessage",type:"text",placeholder:"Type your message"}),l.createElement("span",{className:"chip left"},l.createElement("img",{src:n}),l.createElement("span",null,"Anonymous robot #",e.userID))),l.createElement("div",{className:"input-field col s2"},l.createElement("button",{type:"submit",className:"waves-effect waves-light btn-floating btn-large"},l.createElement("i",{className:"mdi-content-send"}))))))}}]),t}(l.Component);c.propTypes={userID:l.PropTypes.string,sendMessage:l.PropTypes.func},t.default=c}).call(this)}finally{}},341:function(e,t,n){try{(function(){"use strict";function e(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),l=n(479),c=r(l),f=n(4),s=e(f),p=function(e){function t(){return o(this,t),a(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),i(t,[{key:"render",value:function(){return s.createElement(c.default,{mapboxApiAccessToken:"pk.eyJ1IjoianVuZXAxMDA5IiwiYSI6ImNpaTFpbXZhMjAwYXFzd2txaWhwZWg0MGkifQ.zVbpTuEmpLzyRasVFfkysQ",width:"100%",height:"100vh",latitude:37.78,longitude:-122.45,zoom:11})}}]),t}(s.Component);t.default=p}).call(this)}finally{}},342:function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(){return{}}function i(){return{}}Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(4),f=e(c),s=n(210),p=n(340),y=e(p),d=n(339),b=e(d),h=n(341),m=e(h),v=function(e){function t(){var e,n,a,u;r(this,t);for(var i=arguments.length,l=Array(i),c=0;c<i;c++)l[c]=arguments[c];return n=a=o(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(l))),a.state={userID:Math.round(1e6*Math.random()).toString(),history:[]},a.sendMessage=function(e){a.PubNub.publish({channel:"ReactChat",message:e})},u=n,o(a,u)}return a(t,e),l(t,[{key:"componentDidMount",value:function(){var e=this;this.PubNub=PUBNUB.init({publish_key:"pub-c-a21b783d-ac31-4e63-b4f4-d85df580cb54",subscribe_key:"sub-c-0aaf63fc-c4ca-11e6-90ff-0619f8945a4f",ssl:"https:"===location.protocol.toLowerCase()}),this.PubNub.subscribe({channel:"ReactChat",message:function(t){return e.setState({history:e.state.history.concat(t)})}})}},{key:"render",value:function(){var e=this.sendMessage,t=this.state;return f.default.createElement("div",null,f.default.createElement(m.default,null),f.default.createElement(b.default,{history:t.history}),f.default.createElement(y.default,{userID:t.userID,sendMessage:e}))}}]),t}(f.default.Component);t.default=(0,s.connect)(u,i)(v)}).call(this)}finally{}},343:function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function t(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}n(366),n(368),n(367);var r=n(4),o=t(r),a=n(401),u=t(a),i=n(210),l=n(221),c=n(214),f=n(348),s=e(f),p=n(346),y=e(p);n(539);var d=(0,y.default)({}),b=(0,c.syncHistoryWithStore)(l.browserHistory,d);u.render(o.createElement("div",null,o.createElement(i.Provider,{store:d},o.createElement(l.Router,{history:b},s.default))),document.getElementById("root"))}).call(this)}finally{}},344:function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=e.dispatch;return function(e){return function(n){if(!(0,i.default)(n.payload))return e(n);var r=n.types,u=n.payload,l=n.meta,c=u.promise,f=u.data,s=a(r,3),p=s[0],y=s[1],d=s[2];return t(o({type:p},f&&{payload:f},l&&{meta:l})),c.then(function(e){t({type:y,payload:e,meta:l})},function(e){t({type:d,payload:e,meta:l})})}}}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var u,i=e[Symbol.iterator]();!(r=(u=i.next()).done)&&(n.push(u.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{!r&&i.return&&i.return()}finally{if(o)throw a}}return n}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return e(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();t.default=r;var u=n(350),i=e(u)}).call(this)}finally{}},345:function(e,t,n){try{(function(){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=n(123),r=n(214),o=(0,e.combineReducers)({routing:r.routerReducer});t.default=o}).call(this)}finally{}},346:function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(e){var t=l.compose.apply(void 0,[a()].concat(r(u())))(l.createStore)(b.default,e);return i(t),t}function a(){var e=[p.default,f.default];return l.applyMiddleware.apply(void 0,r(e))}function u(){var e=[];return e}function i(e){}Object.defineProperty(t,"__esModule",{value:!0});var l=n(123),c=n(523),f=e(c),s=n(344),p=e(s),y=n(347),d=(e(y),n(345)),b=e(d);t.default=o}).call(this)}finally{}},347:function(e,t,n){(function(e){try{(function(){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(522),a=r(o),u=n(349),i=r(u);t.default=(0,a.default)({collapsed:!0,logger:e,stateTransformer:function(e){return(0,i.default)(e)}})}).call(this)}finally{}}).call(t,n(16))},348:function(e,t,n){try{(function(){"use strict";function e(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(4),o=e(r),a=n(221),u=n(342),i=e(u);t.default=o.default.createElement(a.Route,{path:"/",component:i.default})}).call(this)}finally{}},349:function(e,t,n){try{(function(){"use strict";function e(e){return Object.keys(e).reduce(function(t,n){var o=e[n];return t[n]=r.Iterable.isIterable(o)?o.toJS():o,t},{})}Object.defineProperty(t,"__esModule",{value:!0}),t.default=e;var r=n(42)}).call(this)}finally{}},350:function(e,t,n){try{(function(){"use strict";function e(e){return!!e&&"object"===n(e.promise)&&"function"==typeof e.promise.then}Object.defineProperty(t,"__esModule",{value:!0});var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=e}).call(this)}finally{}},539:function(e,t,n){var r=n(338);"string"==typeof r&&(r=[[e.id,r,""]]),n(528)(r,{}),r.locals&&(e.exports=r.locals)},542:function(e,t){},543:function(e,t){}});
//# sourceMappingURL=app.2f7cfc01ff182b2b5a02.js.map