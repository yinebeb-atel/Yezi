import {
  SUBSCRIBED_FETCH_SUCCESS,
  SUGGESESED_FETCH_SUCCESS,
} from '../actions/types';

const INITIAL_STATE = {
  homepage: true
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SUGGESESED_FETCH_SUCCESS:
      return action.payload;
    case SUBSCRIBED_FETCH_SUCCESS:
      return action.payload;

    default:
      return state;
  }
};
