import { ADD_MESSAGE, SET_CURRENT_USERID, ADD_USER, REMOVE_USER, ADD_MARKER } from '../constants';

export function setCurrentUserID(userID) {
  return {
    type: SET_CURRENT_USERID,
    payload: userID,
  };
}

export function addMessage(message) {
  return {
    type: ADD_MESSAGE,
    payload: message,
  };
}

export function addUser(userID) {
  return {
    type: ADD_USER,
    payload: userID,
  };
}

export function removeUser(userID) {
  return {
    type: REMOVE_USER,
    payload: userID,
  };
}

export function addMarker(userData) {
  return {
    type: ADD_MARKER,
    payload: userData,
  };
}

// export function sendMarker(marker) {
//  return {
//    type: SEND_MARKER,
//    payload: marker
//  }
// }
