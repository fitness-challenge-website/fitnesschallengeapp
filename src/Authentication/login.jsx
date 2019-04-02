import React, { Component } from "react"
// import "../App.css"
import "./login.css"
import firebase from "firebase"
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Login extends Component {
  state = { isSignedIn: false }
  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID

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
            {this.state.isSignedIn ? (
              <span>
                <div><h2>Signed In!</h2></div>
                <h2>Welcome {firebase.auth().currentUser.displayName}</h2>
                <Button variant="primary" onClick={() => firebase.auth().signOut()}>Sign out!</Button>
              </span>
            ) : (
                <Container className="rounded">
                  <Row>
                    <Col>
                    <h1>Welcome to the Fitness Challenge WebApp!</h1>
                    <h2>You must be signed in to use this website</h2>
                    <h2> Please Sign in Below </h2>
                    </Col>
                  </Row>

                  <Row>
                    <Col sm={4}>
                    </Col>
                    <Col sm={4} className="shadow-lg p-3 mb-5 bg-white">
                      <StyledFirebaseAuth
                        uiConfig={this.uiConfig}
                        firebaseAuth={firebase.auth()}
                      />
                    </Col>
                    <Col sm={4}>
                    </Col>
                  </Row>

                </Container>
            )}
      </div>
    )
  }
}

export default Login
