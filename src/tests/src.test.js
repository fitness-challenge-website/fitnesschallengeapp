import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import Firebase from "firebase"


/////////////////////////////////////////////////////////////////
//    RENDER TESTS
/////////////////////////////////////////////////////////////////
it('App renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

/////////////////////////////////////////////////////////////////
//    FURTHER BRANCHING TESTS
/////////////////////////////////////////////////////////////////
it('App renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
