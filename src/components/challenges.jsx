import React, { Component } from "react"
import firebase from "firebase"
import "./challenges.css";
import { Button, Container, Row, Col } from 'react-bootstrap'
{/* Pull challenges from the database. Challenges will have IDs associated
  with them. When a user */}
class Challenges extends Component {
  render() {
    return (


      <Container className="contentDiv">
        <Row className="shadow-lg p-3 mb-5 bg-white">
          <Col>
            <h4>Fitness Challenges</h4>
            <Row className="challengeList">
              <Col>
                <h6>Weekly Challenge</h6>
                <img height="100px" src={require("../Images/1.png")} />
                <Row className="imagePadding">
                  <Col>
                    <Button variant="primary">Join</Button>
                  </Col>
                </Row>
              </Col>
              <Col>
                <h6>Monthly Challenge</h6>
                <img height="100px" src={require("../Images/2.png")} />
                <Row className="imagePadding">
                  <Col>
                    <Button variant="primary">Join</Button>
                  </Col>
                </Row>
              </Col>
              <Col>
                <h6>Yearly Challenge</h6>
                <img height="100px" src={require("../Images/3.png")} />
                <Row className="imagePadding">
                  <Col>
                    <Button variant="primary">Join</Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>


    )
  }
}

export default Challenges
