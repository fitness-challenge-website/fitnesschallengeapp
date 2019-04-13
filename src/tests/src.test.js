import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../App';

Enzyme.configure({ adapter: new Adapter() });


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
// This doesn't work
it('App renders when logged in, without crashing', () => {
  const div = document.createElement('div');
  // const wrapper = shallow(<App />);

  const props = {

      state: {
        isSignedIn: true
      }

  }
  const wrapper = shallow(<App {...props}/>);
  //
  //div_App.simulate(true);
  // // expect(secondButton.props().disabled).toEqual(true);
  ReactDOM.render(wrapper, div);
  //ReactDOM.unmountComponentAtNode(div);
});

// it('App renders when logged in, without crashing2', () => {
//   const div = document.createElement('div');
//   const props = {
//     state: {
//       isSignedIn: true
//     }
//   }
//
//   const component = ReactDOM.render(<App {...props} />, div)
//   ReactDOM.unmountComponentAtNode(div);
//
// });
