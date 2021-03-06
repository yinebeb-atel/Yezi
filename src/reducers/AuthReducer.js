import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  FIRST_NAME_CHANGED,
  LAST_NAME_CHANGED,
  PHONE_CHANGED,
  SIGN_UP_USER_FAIL,
  SIGN_UP_USER_SUCCESS,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER,
  SIGNUP_USER,
  CREATE_ACOUNT,
  USER_FETCH_SUCCESS,
  USER_UPDATE
} from '../actions/types';

const INITIAL_STATE = {
  email: '',
  password: '',
  firstname: '',
  lastname: '',
  phone: '',
  user: null,
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMAIL_CHANGED:
      return { ...state, email: action.payload };
    case PASSWORD_CHANGED:
      return { ...state, password: action.payload };
    case FIRST_NAME_CHANGED:
      return { ...state, firstname: action.payload };
    case LAST_NAME_CHANGED:
      return { ...state, lastname: action.payload };
    case PHONE_CHANGED:
      return { ...state, phone: action.payload };
    case LOGIN_USER:
      return { ...state, loading: true, error: '' };
    case CREATE_ACOUNT:
      return { ...state, ...INITIAL_STATE };
    case SIGNUP_USER:
      return { ...state, loading: true, error: '' };
    case SIGN_UP_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case SIGN_UP_USER_FAIL:
      return {
        ...state,
        error: action.payload.code.split('/')[1],
        email: '',
        password: '',
        firstname: '',
        lastname: '',
        phone: '',
        loading: false
      };
    case LOGIN_USER_SUCCESS:
      return { ...state, ...INITIAL_STATE, user: action.payload };
    case LOGIN_USER_FAIL:
      return {
        ...state,
        error: 'Authentication Failed.',
        password: '',
        loading: false
      };
    case USER_FETCH_SUCCESS:
      return action.payload;
    case USER_UPDATE:
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};
