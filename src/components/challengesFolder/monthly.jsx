import React, { Component } from "react"
import firebase from "firebase"
// import "./challenges.css";
import { Button, Container, Row, Col } from 'react-bootstrap'

class Monthly extends Component {
  render() {
    return (


      <Container className="contentDiv">
        <Row className="shadow-lg p-3 mb-5 bg-white">
          <Col>
            <h4>Monthly</h4>
          </Col>
        </Row>
      </Container>


    )
  }
}

export default Monthly
