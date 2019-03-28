import React, { Component } from "react"
import "./App.css"
import firebase from "firebase"
import Login from './Authentication/login'
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import UserDash from './components/UserDash'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Form, FormControl, Button } from 'react-bootstrap'
import NavBar from './PageContent/navbar'
import MainDashBoard from './PageContent/MainDashBoard'

firebase.initializeApp({
  apiKey: "AIzaSyAYdZGv2f-0gvWOyQ8zkk8HjbsJqmcKwOM",
  authDomain: "fitness-challenge-app.firebaseapp.com"
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
              </Switch>
        </BrowserRouter>
      </div>

    )
  }
}

export default App
