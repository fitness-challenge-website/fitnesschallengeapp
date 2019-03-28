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
    const { open } = this.state;

    return (
      <div className="App">

{ /* ------------ LOGIN SECTION ------------ */ }
          <div className="SignIn">
            {this.state.isSignedIn ? (
              <span>
                <div><h2>Signed In!</h2></div>
                <h2>Welcome {firebase.auth().currentUser.displayName}</h2>
                <Button variant="primary" onClick={() => firebase.auth().signOut()}>Sign out!</Button>
              </span>
            ) : (
              <div><h2> Please Sign in Below </h2>
              <StyledFirebaseAuth
                uiConfig={this.uiConfig}
                firebaseAuth={firebase.auth()}
              />
              </div>
            )}
          </div>
{ /* ------------ LOGIN SECTION ------------ */ }

      </div>
    )
  }
}

export default Login
