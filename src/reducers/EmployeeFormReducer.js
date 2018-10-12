import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  USER_SUBSCRIBE_SUCCESS, //EMPLOYEE_SAVE_SUCCESS,
  USER_UPDATE,
  USER_UPDATE_SUCCESS,
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  phone: '',
  shift: '',
  firstname: '',
  lastname: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEE_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case USER_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case USER_UPDATE_SUCCESS:
      return INITIAL_STATE;
    case EMPLOYEE_CREATE:
      return INITIAL_STATE;
    case USER_SUBSCRIBE_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
};
