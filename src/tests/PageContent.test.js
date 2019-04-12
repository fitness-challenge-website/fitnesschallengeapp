import React from 'react';
import ReactDOM from 'react-dom';

import NavBar from '../PageContent/navbar'
import MainDashBoard from '../PageContent/MainDashBoard'

it.skip('NavBar renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NavBar />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it.skip('MainDashBoard renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MainDashBoard />, div);
  ReactDOM.unmountComponentAtNode(div);
});
