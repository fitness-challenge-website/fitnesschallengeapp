import React, { Component } from "react"
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import firebase from "firebase"
import "./App.css";
import Login from './Authentication/login'
import UserDash from './components/UserDash'
import NavBar from './PageContent/navbar'
import UserProfile from './Authentication/userprofile'
import AddActivity from './components/AddActivity'
import LearnMore from './Authentication/learnmore'
import AddFriends from './components/addfriends'

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
                  <Route path='/AddActivity' component={AddActivity} />
                  <Route path='/add' component={AddFriends} />
                </Switch>
          </BrowserRouter>
        </div>

      ) : (
        <div>
          <BrowserRouter>
                <Switch>
                  <Route exact path='/' component={Login} />
                  <Route path='/learnmore' component={LearnMore} />
                </Switch>
          </BrowserRouter>
        </div>
      )}

      </div>

    )
  }
}

export default App
