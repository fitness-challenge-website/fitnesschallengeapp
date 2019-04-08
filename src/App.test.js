import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from "firebase"
import Login from './Authentication/login'
import UserDash from './components/UserDash'
import NavBar from './PageContent/navbar'
import UserProfile from './Authentication/userprofile'
import AddActivity from './components/AddActivity'
import Leaderboard from './components/Leaderboard'
import LearnMore from './Authentication/learnmore'
import AddFriends from './components/addfriends'
import Challenges from './components/challenges'
import WeeklyChallenge from './components/challengesFolder/weekly'
import MonthlyChallenge from './components/challengesFolder/monthly'
import YearlyChallenge from './components/challengesFolder/yearly'
import MainDashBoard from './PageContent/MainDashBoard'
import NewUser from './Authentication/newuser'

it('App renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Login renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Login />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it.skip('UserDash renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UserDash />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('NavBar renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NavBar />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it.skip('UserProfile renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<UserProfile />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('AddActivity renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<AddActivity />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('Leaderboard renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Leaderboard />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('LearnMore renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LearnMore />, div);
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

it.skip('MainDashBoard renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MainDashBoard />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('NewUser renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NewUser />, div);
  ReactDOM.unmountComponentAtNode(div);
});
