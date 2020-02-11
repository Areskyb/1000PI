import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyA6xDXPyDBrNQ4kDdp-6dP9w5QNLFh18SQ",
    authDomain: "pi-4a942.firebaseapp.com",
    databaseURL: "https://pi-4a942.firebaseio.com",
    projectId: "pi-4a942",
    storageBucket: "pi-4a942.appspot.com",
    messagingSenderId: "739914753383",
    appId: "1:739914753383:web:5f876b9aeae3eb58aa7bc2",
    measurementId: "G-4PWEMLRYQ9"
  };

  firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
