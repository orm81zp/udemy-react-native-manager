import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

import {
  FIREBASE_APIKEY,
  FIREBASE_AUTHDOMAIN,
  FIREBASE_DATABASEURL,
  FIREBASE_PROJECTID,
  FIREBASE_STORAGEBUCKET,
  FIREBASE_MESSAGINGSENDERID,
  FIREBASE_APPID,
} from 'react-native-dotenv';

class App extends Component {
  componentDidMount() {
    firebase.initializeApp({
      apiKey: FIREBASE_APIKEY,
      authDomain: FIREBASE_AUTHDOMAIN,
      databaseURL: FIREBASE_DATABASEURL,
      projectId: FIREBASE_PROJECTID,
      storageBucket: FIREBASE_STORAGEBUCKET,
      messagingSenderId: FIREBASE_MESSAGINGSENDERID,
      appId: FIREBASE_APPID,
    });
  }

  render() {
    const store = createStore(
      reducers,
      {},
      applyMiddleware(ReduxThunk)
    );

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
