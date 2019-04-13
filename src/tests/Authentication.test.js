import React from 'react';
import ReactDOM from 'react-dom';

import firebase from "firebase";

import LearnMore from '../Authentication/learnmore'
import Login from '../Authentication/login'
import NewUser from '../Authentication/newuser'
import Register from '../Authentication/Register'
import UserProfile from '../Authentication/userprofile'

firebase.initializeApp({
  apiKey: "AIzaSyAYdZGv2f-0gvWOyQ8zkk8HjbsJqmcKwOM",
  authDomain: "fitness-challenge-app.firebaseapp.com",
  storageBucket: "fitness-challenge-app.appspot.com"
})

// beforeAll(function() {
//   firebase.auth = jest.fn().mockReturnValue({
//     currentUser: {
//       uid: 'TEST'
//     }
//   });
// });

/////////////////////////////////////////////////////////////////
//    RENDER TESTS
/////////////////////////////////////////////////////////////////
it('LearnMore renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LearnMore />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Login renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Login />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('NewUser renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NewUser />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Register renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Register />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('UserProfile renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UserProfile />, div);
  ReactDOM.unmountComponentAtNode(div);
});
