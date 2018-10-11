import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMAIL_CHANGED,
  PASSWORD_CHANGED,
  FIRST_NAME_CHANGED,
  LAST_NAME_CHANGED,
  PHONE_CHANGED,
  CREATE_ACOUNT,
  SIGN_UP_USER_FAIL,
  SIGN_UP_USER_SUCCESS,
  LOGIN_USER_SUCCESS,
  LOGIN_USER_FAIL,
  SIGNUP_USER,
  LOGIN_USER,
  // SAVE_NEW_ACOUNT
} from './types';

export const emailChanged = (text) => {
  return {
    type: EMAIL_CHANGED,
    payload: text
  };
};

export const passwordChanged = (text) => {
  return {
    type: PASSWORD_CHANGED,
    payload: text
  };
};

export const firstNameChanged = (text) => {
  return {
    type: FIRST_NAME_CHANGED,
    payload: text
  };
};

export const lastNameChanged = (text) => {
  return {
    type: LAST_NAME_CHANGED,
    payload: text
  };
};

export const phoneChanged = (text) => {
  return {
    type: PHONE_CHANGED,
    payload: text
  };
};

export const createAcount = () => {
  return {
    type: CREATE_ACOUNT,
    payload: null
  };
};

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch((error) => {
        console.log(error);
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSuccess(dispatch, user))
          .catch(() => loginUserFail(dispatch));
      });
  };
};


const loginUserFail = (dispatch) => {
  dispatch({ type: LOGIN_USER_FAIL });
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });
  Actions.main();
};


export const signUpUser = ({ email, password, firstname, lastname, phone }) => {
  return (dispatch) => {
    dispatch({ type: SIGNUP_USER });
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(user => signUpUserSuccess(dispatch, firstname, lastname, phone, user))
      .catch((err) => signUpUserFail(dispatch, err));
  };
};

const signUpUserFail = (dispatch, err) => {
  dispatch({
    type: SIGN_UP_USER_FAIL,
    payload: err
  });
};

const signUpUserSuccess = (dispatch, firstname, lastname, phone, user) => {
  // console.log('output!!!!!!!!:', firstname, lastname, phone, user.user.uid);
  dispatch({
    type: SIGN_UP_USER_SUCCESS,
    payload: user
  });
  Actions.login();
  firebase.database().ref('users')
    .child(`${user.user.uid}`)
    .child('userdata')
    .set({ firstname, lastname, phone });
};

