import React, { Component } from "react"
import firebase from "firebase"
// import "./challenges.css";
import { Button, Container, Row, Col } from 'react-bootstrap'
import { Line, Circle } from 'rc-progress'


class Weekly extends Component {


  render() {
    return (
      <Container className="contentDiv">
        <Row className="shadow-lg p-3 mb-5 bg-white">
          <Col>
            <h4>Weekly</h4>
              <Line percent="10" strokeWidth="4" strokeColor="#D3D3D3" />
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Weekly
