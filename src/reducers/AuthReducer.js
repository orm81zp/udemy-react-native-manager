import { ACTION_EMAIL_CHANGED } from '../actions/types';

const INITIAL_STATE = { email: '' };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTION_EMAIL_CHANGED:
      return action.payload;
    default:
      return state;
  }
}
