import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import firebase from "firebase";

import LearnMore from '../Authentication/learnmore'
import Login from '../Authentication/login'
import NewUser from '../Authentication/newuser'
import Register from '../Authentication/Register'
import UserProfile from '../Authentication/userprofile'

Enzyme.configure({ adapter: new Adapter() });

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

it('Login true renders without crashing', () => {
  firebase = jest.fn().mockReturnValue({
    auth: {
      GoogleAuthProvider: {
        PROVIDER_ID: 'TEST'
      }
    }
  });
  firebase.auth = jest.fn().mockReturnValue({
    currentUser: {
      displayName: 'TEST'
    },
    onAuthStateChanged: function() { return true; }
  });

  const div = document.createElement('div');
  ReactDOM.render(<Login />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Login false renders without crashing', () => {
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
  firebase.auth = jest.fn().mockReturnValue({
    currentUser: {
      uid: 'TEST'
    },
    onAuthStateChanged: function() { return true; }
  });
  firebase.storage = jest.fn().mockReturnValue({
    ref: function() { return true; }
  });

  const div = document.createElement('div');
  ReactDOM.render(<UserProfile />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('User profile button Edit Profile', () => {
  firebase.auth = jest.fn().mockReturnValue({
    currentUser: {
      uid: 'TEST'
    },
    onAuthStateChanged: function() { return true; }
  });
  firebase.storage = jest.fn().mockReturnValue({
    ref: function() { return true; }
  });

  const div = document.createElement('div');
  const wrapper = shallow(<UserProfile />);
  const editProfileButton = wrapper.find('Button').at(0);

  editProfileButton.simulate('click');
  ReactDOM.render(wrapper, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('User profile button Edit Health', () => {
  firebase.auth = jest.fn().mockReturnValue({
    currentUser: {
      uid: 'TEST'
    },
    onAuthStateChanged: function() { return true; }
  });
  firebase.storage = jest.fn().mockReturnValue({
    ref: function() { return true; }
  });

  const div = document.createElement('div');
  const wrapper = shallow(<UserProfile />);
  const editHealthButton = wrapper.find('Button').at(1);

  editHealthButton.simulate('click');
  // ReactDOM.render(wrapper, div);
  // ReactDOM.unmountComponentAtNode(div);
});
