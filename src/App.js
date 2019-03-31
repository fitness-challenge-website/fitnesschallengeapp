import React, { Component } from "react"
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import firebase from "firebase"
import "./App.css";
import Login from './Authentication/login'
import UserDash from './components/UserDash'
import NavBar from './PageContent/navbar'
import MainDashBoard from './PageContent/MainDashBoard'
import UserProfile from './Authentication/userprofile'
import ProfilePage from './Authentication/test'
import ActivityCard from './components/ActivityCard'
import AddActivity from './components/AddActivity'

firebase.initializeApp({
  apiKey: "AIzaSyAYdZGv2f-0gvWOyQ8zkk8HjbsJqmcKwOM",
  authDomain: "fitness-challenge-app.firebaseapp.com",
  storageBucket: "fitness-challenge-app.appspot.com"
})

class App extends Component {
  render() {
    return (

      <div className="App">
        <NavBar />
        <BrowserRouter>
              <Switch>
                <Route exact path='/' component={MainDashBoard} />
                <Route path='/login' component={Login} />
                <Route path='/userdash' component={UserDash} />
                <Route path='/profile' component={UserProfile} />
                <Route path='/test' component={ProfilePage} />
                <Route path='/ActivityCard' component={ActivityCard} />
                <Route path='/AddActivity' component={AddActivity} />
              </Switch>
        </BrowserRouter>
      </div>

    )
  }
}

export default App
