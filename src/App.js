import React, { Component } from "react"
import "./App.css"
import firebase from "firebase"
import Login from './Authentication/login'
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import UserDash from './components/UserDash'



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
          <Switch>
            <Route path='/login' component={Login} />
            <Route path='/userdash' component={UserDash} />
          </Switch>




        </div>
      </BrowserRouter>
    )
  }
}

export default App
