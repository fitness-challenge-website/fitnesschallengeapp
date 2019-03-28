import React, { Component } from "react"
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import firebase from "firebase"

import "./App.css";

import Login from './Authentication/login'
import UserDash from './components/UserDash'
import AddActivity from './components/AddActivity'



firebase.initializeApp({
  apiKey: "AIzaSyAYdZGv2f-0gvWOyQ8zkk8HjbsJqmcKwOM",
  authDomain: "fitness-challenge-app.firebaseapp.com"
})

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
        <Link to='/login'>Login (WIP)</Link>
        <Link to='/userdash'>User Dash (WIP)</Link>
        <Link to='/addactivity'>Add Activity (WIP)</Link>
          <Switch>
            <Route path='/login' component={Login} />
            <Route path='/userdash' component={UserDash} />
            <Route path='/addactivity' component={AddActivity} />
          </Switch>

        </div>
      </BrowserRouter>
    )
  }
}

export default App
