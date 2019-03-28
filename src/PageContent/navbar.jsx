import React, { Component } from "react"
import "../App.css"
import { Navbar, Nav, Button } from 'react-bootstrap'
import firebase from "firebase"



class NavBar extends Component {
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
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">Fitness Challenge App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/userdash">User Dashboard</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <Navbar.Collapse className="justify-content-end">
            {this.state.isSignedIn ? (
              <span>
                <Navbar.Text>
                    Signed in as: <a href="/login">{firebase.auth().currentUser.displayName}</a>
                </Navbar.Text>
              </span>
            ) : (
              <div>
                <Navbar.Text>
                  <Button variant="primary" href="/login">Login</Button>
                </Navbar.Text>
              </div>
            )}

              { /* <Nav.Link href="/login">Login</Nav.Link> */ }
            </Navbar.Collapse>
          </Navbar>

        </div>
    )
  }
}

export default NavBar
