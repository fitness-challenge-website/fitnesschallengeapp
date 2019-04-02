import React, { Component } from "react"
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import firebase from "firebase"
import "./App.css";
import Login from './Authentication/login'
import UserDash from './components/UserDash'
import NavBar from './PageContent/navbar'
import UserProfile from './Authentication/userprofile'
import ActivityCard from './components/ActivityCard'
import AddActivity from './components/AddActivity'

firebase.initializeApp({
  apiKey: "AIzaSyAYdZGv2f-0gvWOyQ8zkk8HjbsJqmcKwOM",
  authDomain: "fitness-challenge-app.firebaseapp.com",
  storageBucket: "fitness-challenge-app.appspot.com"
})

class App extends Component {
  state = { isSignedIn: false }
  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("user", user)
    })
  }
  render() {
    return (




      <div className="App">
      {this.state.isSignedIn ? (
        <div>
          <NavBar />
          <BrowserRouter>
                <Switch>
                  <Route exact path='/' component={UserDash} />
                  <Route path='/login' component={Login} />
                  <Route path='/userdash' component={UserDash} />
                  <Route path='/profile' component={UserProfile} />
                  <Route path='/ActivityCard' component={ActivityCard} />
                  <Route path='/AddActivity' component={AddActivity} />
                </Switch>
          </BrowserRouter>
        </div>

      ) : (
        <div>
          <BrowserRouter>
                <Switch>
                  <Route exact path='/' component={Login} />
                </Switch>
          </BrowserRouter>
        </div>
      )}

      </div>

    )
  }
}

export default App
