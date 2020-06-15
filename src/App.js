import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

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
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
