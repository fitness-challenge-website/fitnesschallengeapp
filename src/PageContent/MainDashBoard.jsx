import React, { Component } from "react"
import "./MainDashBoard.css"
import firebase from "firebase"
import { Container, Row, Col } from 'react-bootstrap'
import { Progress } from 'reactstrap';



class MainDashBoard extends Component {

  constructor(props, context) {
      super(props, context);
      this.state = {
        isSignedIn: false,
        userDisplayName: "",
      }


  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      this.setState({userDisplayName: firebase.auth().currentUser.displayName})

    })
  }

  render() {
    return (

      <Container className="contentDiv">
        <Row>
          <Col className="shadow-lg p-3 mb-5 bg-white" lg={8}>
            <h4>Welcome,
              {" " + firebase.auth().currentUser.displayName}
            </h4>
            <h6>
              Today's completed activity:
            </h6>
            <Row className="activityList">
              <Col>
                <p> You haven't completed any activity today! </p>
              </Col>

            </Row>
          </Col>

          <Col className="shadow-lg p-3 mb-5 bg-white leftBar" lg={4}>
            <h4>Your Progress</h4>
            <Row className="barSpacing">
              <Col>
                <h6>Weekly Challenge Progress</h6>
                <Progress value={80} />
              </Col>
            </Row>

            <Row className="barSpacing">
              <Col>
                <h6>Monthly Challenge Progress</h6>
                <Progress value={40} />
              </Col>
            </Row>

            <Row className="barSpacing">
              <Col>
                <h6>Yearly Challenge Progress</h6>
                <Progress value={20} />
              </Col>
            </Row>

            <h4 className="barSpacingTwo">Your Badges</h4>
            <Row>
              <Col>
                <img height="50px" src={require('../Images/badges/001-badge.png')} alt=""/>
              </Col>
              <Col>
                <img height="50px" src={require('../Images/badges/002-trophy.png')} alt=""/>
              </Col>
              <Col>
                <img height="50px" src={require('../Images/badges/003-silver-medal.png')} alt=""/>
              </Col>
            </Row>
            <Row className="barSpacing">
              <Col>
                <img height="50px" src={require('../Images/badges/004-first.png')} alt=""/>
              </Col>
              <Col>
                <img height="50px" src={require('../Images/badges/005-present.png')} alt=""/>
              </Col>
              <Col>
                <img height="50px" src={require('../Images/badges/006-money.png')} alt=""/>
              </Col>
            </Row>

          </Col>
        </Row>

      </Container>



    )
  }
}

export default MainDashBoard
