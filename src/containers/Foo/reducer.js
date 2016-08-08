import * as at from 'constants/actionTypes';
import immutable from 'immutable';

const INITIAL_STATE = immutable.fromJS({
  message: '请输入指令',
});

export default function foo(state = INITIAL_STATE, action) {
  switch (action.type) {
    case at.CHANGE_MESSAGE:
      return state.update('message', () => action.message);
    default:
      return state;
  }
}
