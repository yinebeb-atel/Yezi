import {
  SUBSCRIBED_FETCH_SUCCESS,
  SUBSCRIBE_FETCH_SUCCESS, // TODO: use SUBSCRIBED_FETCH_SUCCESS
  USER_FETCH_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {
  firstname: '',
  lastname: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SUBSCRIBE_FETCH_SUCCESS:
      return action.payload;
    case SUBSCRIBED_FETCH_SUCCESS:
      return action.payload;
    case USER_FETCH_SUCCESS:
      return action.payload;
    default:
      return state;
  }
};
