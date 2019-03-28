import React, { Component } from "react"
import "./App.css"
import firebase from "firebase"
import Login from './Authentication/login'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import UserDash from './components/UserDash'
import NavBar from './PageContent/navbar'
import MainDashBoard from './PageContent/MainDashBoard'
import UserProfile from './Authentication/userprofile'
import ProfilePage from './Authentication/test'

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
              </Switch>
        </BrowserRouter>
      </div>

    )
  }
}

export default App
