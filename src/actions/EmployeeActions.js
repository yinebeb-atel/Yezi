import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  SUBSCRIBED_FETCH_SUCCESS, //
  SUBSCRIBE_FETCH_SUCCESS,
  USER_SUBSCRIBE_SUCCESS, //EMPLOYEE_SAVE_SUCCESS,
  USER_UPDATE,
  USER_UPDATE_SUCCESS,
  USER_FETCH_SUCCESS
} from './types';
import temp from '../components/temp.json';

// Fetch data actions
export const subscribedFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref('users')
      .child(`${currentUser.uid}`)
      .child('subscribed')
      .on('value', snapshot => {
        dispatch({ type: SUBSCRIBED_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

// Update data actions
export const businessListFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref('users')
      .child(`${currentUser.uid}`)
      .child('suggested')
      .on('value', snapshot => {
        dispatch({ type: SUBSCRIBE_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const userSubscribed = ({ name, hours, type, count, rating, uid }) => {
  const { currentUser } = firebase.auth();

  return () => {
    firebase.database().ref(`users/${currentUser.uid}/subscribed/${uid}`)
      .set({ name, hours, type, count, rating })
      .then(() => { });
  };
};


export const removeFromSuggested = (uid) => {
  const { currentUser } = firebase.auth();
  return () => {
    firebase.database().ref(`users/${currentUser.uid}/suggested/${uid}`)
      .remove()
      .then(() => { });
  };
};

export const userUnSubscribed = ({ name, hours, type, count, rating, uid }) => {
  const { currentUser } = firebase.auth();

  return () => {
    firebase.database().ref(`users/${currentUser.uid}/suggested/${uid}`)
      .set({ name, hours, type, count, rating })
      .then(() => { });
  };
};

export const removeFromSubscribed = (uid) => {
  const { currentUser } = firebase.auth();
  return () => {
    firebase.database().ref(`users/${currentUser.uid}/subscribed/${uid}`)
      .remove()
      .then(() => { });
  };
};


// Fetch and update user profile
export const userUpdate = ({ prop, value }) => {
  return {
    type: USER_UPDATE,
    payload: { prop, value }
  };
};

export const userFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref('users').child(`${currentUser.uid}`).child('userdata')
      .on('value', snapshot => {
        dispatch({ type: USER_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};

export const updateUserProfile = ({ firstname, lastname, phone }) => {
  const { currentUser } = firebase.auth();
  console.log(firstname, lastname, phone, currentUser.uid);
  return (dispatch) => {
    firebase.database().ref('users').child(`${currentUser.uid}`).child('userdata')
      .update({ firstname, lastname, phone })
      .then(() => {
        dispatch({ type: USER_UPDATE_SUCCESS });
        Actions.employeeCreate();
      });
  };
};

//TODO: Delete user
