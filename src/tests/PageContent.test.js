import React from 'react';
import ReactDOM from 'react-dom';

import firebase from "firebase";

import NavBar from '../PageContent/navbar'
import MainDashBoard from '../PageContent/MainDashBoard'

firebase.initializeApp({
  apiKey: "AIzaSyAYdZGv2f-0gvWOyQ8zkk8HjbsJqmcKwOM",
  authDomain: "fitness-challenge-app.firebaseapp.com",
  storageBucket: "fitness-challenge-app.appspot.com"
})

beforeAll(function() {
  firebase.auth = jest.fn().mockReturnValue({
    currentUser: {
      uid: 'TEST'
    }
  });
});

/////////////////////////////////////////////////////////////////
//    RENDER TESTS
/////////////////////////////////////////////////////////////////
it('NavBar renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NavBar />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('MainDashBoard renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MainDashBoard />, div);
  ReactDOM.unmountComponentAtNode(div);
});
