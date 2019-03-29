import React, { Component } from "react"
import "../App.css"
import firebase from "firebase"
import { Button } from 'react-bootstrap'


class MainDashBoard extends Component {
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
        <span>
          <img src={require('../Images/dumbell.png')} width="30%" height="30%" alt="dumbell clip art"/>
          <h1> Welcome to the Fitness Challenge App</h1>
          <h3> This is the temporary main page dashboard </h3>
          <h4> You are logged in as: {firebase.auth().currentUser.displayName} </h4>
          <Button variant="primary" href="/profile">View Profile</Button>
        </span>
      ) : (
        <div>
          <img src={require('../Images/dumbell.png')} width="30%" height="30%" alt="dumbell clip art"/>
          <h1> Welcome to the Fitness Challenge App</h1>
          <h3> This is the temporary main page dashboard </h3>
        </div>
      )}



      </div>

    )
  }
}

export default MainDashBoard
