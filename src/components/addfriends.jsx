import React, { Component } from "react"
import firebase from "firebase"
import { Button, Form, Container, Row, Col, Modal } from 'react-bootstrap'


class AddFriends extends Component {
  render() {
    return (
      <Container className="mainDisplay">
        <Row>
          <Col className="shadow-lg p-3 mb-5 bg-white">
            <p> Add Your Friends!</p>
          </Col>
        </Row>


      </Container>
    )
  }
}

export default AddFriends
