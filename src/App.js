import React, { Component } from "react"
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import firebase from "firebase"
import "./App.css";
import Login from './Authentication/login'
import UserDash from './components/UserDash'
import NavBar from './PageContent/navbar'
import UserProfile from './Authentication/userprofile'
import AddActivity from './components/AddActivity'
import Leaderboard from './components/Leaderboard'
import LearnMore from './Authentication/learnmore'
import Challenges from './components/challenges'
import WeeklyChallenge from './components/challengesFolder/weekly'
import MonthlyChallenge from './components/challengesFolder/monthly'
import YearlyChallenge from './components/challengesFolder/yearly'
import MainDashBoard from './PageContent/MainDashBoard'
import NewUser from './Authentication/newuser'
import Friends from './components/Friends'
import Groups from './components/Groups'
import Register from './Authentication/register'


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
                  <Route exact path='/' component={MainDashBoard} />
                  <Route path='/login' component={Login} />
                  <Route path='/userdash' component={UserDash} />
                  <Route path='/profile' component={UserProfile} />
                  <Route path='/addactivity' component={AddActivity} />
                  <Route path='/leaderboard' component={Leaderboard} />
                  <Route path='/challenges' component={Challenges} />
                  <Route path='/weeklychallenge' component={WeeklyChallenge} />
                  <Route path='/monthlychallenge' component={MonthlyChallenge} />
                  <Route path='yearlychallenge' component={YearlyChallenge} />
                  <Route path='/yearlychallenge' component={YearlyChallenge} />
                  <Route path='/newuser' component={NewUser} />
				  <Route path='/friends' component={Friends} />
				  <Route path='/groups' component={Groups} />
                </Switch>
          </BrowserRouter>
        </div>

      ) : (
        <div>
          <BrowserRouter>
                <Switch>
                  <Route exact path='/' component={Login} />
                  <Route path='/register' component={Register} />
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
