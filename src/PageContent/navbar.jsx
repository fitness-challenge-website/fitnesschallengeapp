import React, { Component } from "react"
import "../App.css"
import { Navbar, Nav, Button, NavDropdown } from 'react-bootstrap'
import firebase from "firebase"



class NavBar extends Component {
  state = { isSignedIn: false }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
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
                <Nav.Link href="/AddActivity">Add Activity</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <Navbar.Collapse className="justify-content-end">
            {this.state.isSignedIn ? (
              <span>
              <Nav className="mr-auto">
                <NavDropdown title={firebase.auth().currentUser.displayName} id="basic-nav-dropdown">
                 <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                 <NavDropdown.Item href="/add">Add Friends</NavDropdown.Item>
                 <NavDropdown.Divider />
                 <NavDropdown.Item onClick={() => firebase.auth().signOut()}>Sign Out</NavDropdown.Item>
               </NavDropdown>
              </Nav>
              </span>
            ) : (
              <div>
                <Navbar.Text>
                  <Button variant="primary" href="/login">Login</Button>
                </Navbar.Text>
              </div>
            )}
            </Navbar.Collapse>
          </Navbar>

        </div>
    )
  }
}

export default NavBar
