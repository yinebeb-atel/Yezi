import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';
import { API_KEY, AUTH_DOMAIN, DATABSE_URL, PROJECT_ID, BUCKET, MESSAGE } from 'react-native-dotenv';


class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: API_KEY,
      authDomain: AUTH_DOMAIN,
      databaseURL: DATABSE_URL,
      projectId: PROJECT_ID,
      storageBucket: BUCKET,
      messagingSenderId: MESSAGE
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store} >
        <Router />
      </Provider>
    );
  }
}

export default App;