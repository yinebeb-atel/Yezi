import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyB8UUCO44Uhe5bpS3PPiZOETgaAFZ5qin0',
      authDomain: 'yezi-49ccb.firebaseapp.com',
      databaseURL: 'https://yezi-49ccb.firebaseio.com',
      projectId: 'yezi-49ccb',
      storageBucket: 'yezi-49ccb.appspot.com',
      messagingSenderId: '120921945012'
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

