import React, { Component } from "react"
// import firebase from "firebase"
// import "./challenges.css";
import { Container, Row, Col } from 'react-bootstrap'
import { Progress } from 'reactstrap';


class Monthly extends Component {
  render() {
    return (


      <Container className="contentDiv">
        <Row className="shadow-lg p-3 mb-5 bg-white">
          <Col>
            <h4>Monthly Challenge</h4>
            <h6>Your Progress</h6>
            <Row>
              <Col>
              </Col>
              <Col>
                <Progress value={50} />
                <h6>25%</h6>
              </Col>
              <Col>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>


    )
  }
}

export default Monthly
