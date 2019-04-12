import React from 'react';
import ReactDOM from 'react-dom';

import LearnMore from '../Authentication/learnmore'
import Login from '../Authentication/login'
import NewUser from '../Authentication/newuser'
import Register from '../Authentication/Register'
import UserProfile from '../Authentication/userprofile'

it('LearnMore renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LearnMore />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it.skip('Login renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Login />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('NewUser renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NewUser />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it.skip('Register renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Register />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it.skip('UserProfile renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UserProfile />, div);
  ReactDOM.unmountComponentAtNode(div);
});
