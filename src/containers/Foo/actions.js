import * as at from 'constants/actionTypes';
import 'whatwg-fetch';

export function changeName(name) {
  return {
    type: at.CHANGE_NAME,
    name,
  };
}

export function changeMessage(message) {
  return {
    type: at.CHANGE_MESSAGE,
    message,
  };
}

export function randomName(num) {
  return (dispatch) => (
    fetch('/order', {
      method: 'post',
      body: num,
    })
      .then(response => response.text())
      .then(text => dispatch(changeMessage(text)))
  );
}