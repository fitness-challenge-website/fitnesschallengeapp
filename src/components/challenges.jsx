import React, { Component } from "react"
// import firebase from "firebase"
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
                <img height="100px" src={require("../Images/1.png")} alt="" />
                <Row>
                  <Col>
                    <li>Complete 5 Workouts</li>
                    <li>Place top 25% of leaderboard</li>
                  </Col>
                </Row>
                <Row className="imagePadding">
                  <Col>
                    <Button variant="primary" href="/weeklychallenge">View</Button>
                  </Col>
                </Row>
              </Col>
              <Col>
                <h6>Monthly Challenge</h6>
                <img height="100px" src={require("../Images/2.png")} alt="" />
                <Row>
                  <Col>
                    <li>Complete 25 Workouts</li>
                    <li>Place top 10% of leaderboard</li>
                  </Col>
                </Row>
                <Row className="imagePadding">
                  <Col>
                    <Button variant="primary" href="/monthlychallenge">View</Button>
                  </Col>
                </Row>
              </Col>
              <Col>
                <h6>Yearly Challenge</h6>
                <img height="100px" src={require("../Images/3.png")} alt="" />
                <Row>
                  <Col>
                    <li>Complete 325 Workouts</li>
                    <li>Place top 5% of leaderboard</li>
                  </Col>
                </Row>
                <Row className="imagePadding">
                  <Col>
                    <Button variant="primary" href="/yearlychallenge">View</Button>
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row className="challengeListTwo">
              <Col>
              </Col>

              <Col>
                <h6>Heart Month</h6>
                <img height="100px" src={require("../Images/4.png")} alt="" />
                <Row>
                  <Col>
                    <li>Complete 5 runs this week</li>
                  </Col>
                </Row>
                <Row className="imagePadding">
                  <Col>
                    <Button variant="primary">View</Button>
                  </Col>
                </Row>
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

export default Challenges
