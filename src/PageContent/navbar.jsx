import React, { Component } from "react"
import "../App.css"
import firebase from "firebase"
import Login from '../Authentication/login'
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom'
import UserDash from '../components/UserDash'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Form, FormControl, Button } from 'react-bootstrap'


class NavBar extends Component {
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
            {/*  <Navbar.Text>
                Signed in as: <a href="/login">Test</a>
              </Navbar.Text> */}
              <Nav.Link href="/login">Login</Nav.Link>
            </Navbar.Collapse>
          </Navbar>

        </div>
    )
  }
}

export default NavBar
