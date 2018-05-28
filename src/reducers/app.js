import {
  ADD_MESSAGE, SET_CURRENT_USERID, ADD_USER,
  REMOVE_USER, ADD_MARKER, SEND_MARKER,
} from '../constants';
import {fromJS} from 'immutable';

const INITIAL_STATE = fromJS({
  userID: 0,
  messages: [],
  users: [],
  markers: [],
});
// อันนี้ควรย้ายไปอยู่ที่ state change not in reducer
// ควรเป็น solid

// default INITIAL_STATE -> แต่หลังจาก pass in เข้ามา

function appReducer(state = INITIAL_STATE, action = {}) {
  switch (action.type) {
    case SET_CURRENT_USERID:
      return state.update('userID', () => action.payload);
    case ADD_MESSAGE:
      return state.update('messages', (messages) =>
        messages.concat(action.payload)
      );
    case ADD_USER:
      return state.update('users', (users) =>
        (users.indexOf(action.payload) >= 0 ?
          users : users.concat(action.payload))
      );
    case ADD_MARKER:
      return state.update('markers', (markers) => markers.concat(action.payload));
    case REMOVE_USER:
      return state.update('users', (users) =>
        users.filter(element => element !== action.payload)
      );
    case SEND_MARKER:
      return state;
    default:
      return state;
  }
}
export default appReducer;
