import React, { Component } from "react"
import "../App.css"
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import Button from 'react-bootstrap/Button'

class Login extends Component {
  state = { isSignedIn: false }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("user", user)
    })
  }

  render() {
    return (
      <div className="App">

{ /* ------------ LOGIN SECTION ------------ */ }
          <div className="SignIn">
            {this.state.isSignedIn ? (
              <span>
                <h1> User Profile </h1>
                <h4> Display Name: {firebase.auth().currentUser.displayName} </h4>
                <h4> Email Address: {firebase.auth().currentUser.email} </h4>
              </span>
            ) : (
              <div>
                <h3>You must be signed in to view this page. </h3>
              </div>
            )}
          </div>
{ /* ------------ LOGIN SECTION ------------ */ }

      </div>
    )
  }
}

export default Login
