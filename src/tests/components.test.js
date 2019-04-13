import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import firebase from "firebase";

import ActivityCard from '../components/ActivityCard'
import AddActivity from '../components/AddActivity'
import AddFriends from '../components/addfriends'
import Challenges from '../components/challenges'
import WeeklyChallenge from '../components/challengesFolder/weekly'
import MonthlyChallenge from '../components/challengesFolder/monthly'
import YearlyChallenge from '../components/challengesFolder/yearly'
import Charts from '../components/Charts'
import Friends from '../components/Friends'
import Groups from '../components/Groups'
import Leaderboard from '../components/Leaderboard'
import Sample from '../components/Sample'
import UserDash from '../components/UserDash'
import UserFeed from '../components/UserFeed'

Enzyme.configure({ adapter: new Adapter() });

firebase.initializeApp({
  apiKey: "AIzaSyAYdZGv2f-0gvWOyQ8zkk8HjbsJqmcKwOM",
  authDomain: "fitness-challenge-app.firebaseapp.com",
  storageBucket: "fitness-challenge-app.appspot.com"
})

/////////////////////////////////////////////////////////////////
//    RENDER TESTS
/////////////////////////////////////////////////////////////////
it('ActivityCard renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ActivityCard />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('AddActivity renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddActivity />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('AddFriends renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddFriends />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Challenges renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Challenges />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('WeeklyChallenge renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<WeeklyChallenge />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('MonthlyChallenge renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MonthlyChallenge />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('YearlyChallenge renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<YearlyChallenge />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Charts renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Charts />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Friends renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Friends />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Groups renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Groups />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Leaderboard renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Leaderboard />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Sample renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Sample />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('UserDash renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UserDash />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('UserFeed renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UserFeed />, div);
  ReactDOM.unmountComponentAtNode(div);
});

/////////////////////////////////////////////////////////////////
//    AddActivity
/////////////////////////////////////////////////////////////////
describe('Add Activity saves activity', () => {
  it('Running activity', () => {
    firebase.auth = jest.fn().mockReturnValue({
      currentUser: {
        uid: 'TEST'
      }
    });
    document.getElementById = jest.fn().mockReturnValue({
      name: 'Test',
      description: 'Test',
      type: 'Test',
      duration: 10,
      distance: 10,
      updatedAt: '2019-04-11 12:00:00'
    });
    window.alert = jest.fn();

    const div = document.createElement('div');
    const wrapper = shallow(<AddActivity />);
    const saveActivityButton = wrapper.find('Button');

    saveActivityButton.simulate('click');
  });
});
