import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import {
  EMPLOYEE_UPDATE,
  EMPLOYEE_CREATE,
  SUBSCRIBED_FETCH_SUCCESS, //
  SUBSCRIBE_FETCH_SUCCESS,
  EMPLOYEE_SAVE_SUCCESS,
  USER_UPDATE,
  USER_UPDATE_SUCCESS,
  USER_FETCH_SUCCESS
} from './types';
import temp from '../components/temp.json';


export const employeeUpdate = ({ prop, value }) => {
  return {
    type: EMPLOYEE_UPDATE,
    payload: { prop, value }
  };
};


export const employeeCreate = ({ name, phone, shift }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/subscibe`)
      .push({ name, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEE_CREATE });
        Actions.employeeList({ type: 'reset' });
      });
  };
};

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


// export const employeesFetch = () => {
//   return (dispatch) => dispatch({ type: EMPLOYEES_FETCH_SUCCESS, payload: { temp } });
// };

// export const subscribedFetch = () => {
//   const { currentUser } = firebase.auth();
//   console.log('user!!!!', currentUser.uid);
//   return (dispatch) => {
//     firebase.database().ref(`/users/${currentUser.uid}/subscriptions`)
//       .on('value', (snapshot) => {
//         console.log('snapshot:', snapshot.val());
//         dispatch({ type: SUBSCRIBED_FETCH_SUCCESS, payload: snapshot.val() });
//       }, (errorObject) => console.log('The read failed: ', errorObject.code)
//       );
//   };
// };

export const employeeSave = ({ name, phone, shift, uid }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
      .set({ name, phone, shift })
      .then(() => {
        dispatch({ type: EMPLOYEE_SAVE_SUCCESS });
        Actions.employeeList({ type: 'reset' });
      });
  };
};

export const employeeDelete = ({ uid }) => {
  const { currentUser } = firebase.auth();

  return () => {
    firebase.database().ref(`/users/${currentUser.uid}/employees/${uid}`)
      .remove()
      .then(() => {
        Actions.employeeList({ type: 'reset' });
      });
  };
};


export const userUpdate = ({ prop, value }) => {
  return {
    type: USER_UPDATE,
    payload: { prop, value }
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


export const userFetch = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref('users').child(`${currentUser.uid}`).child('userdata')
      .on('value', snapshot => {
        dispatch({ type: USER_FETCH_SUCCESS, payload: snapshot.val() });
      });
  };
};
