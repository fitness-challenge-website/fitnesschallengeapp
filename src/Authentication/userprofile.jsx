import React, { Component } from "react"
// import "../App.css"
import "./userprofile.css"
import firebase from "firebase"
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import FileUploader from "react-firebase-file-uploader";
import Modal from 'react-bootstrap/Modal'


class Login extends Component {

  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  state = {
    isSignedIn: false,
    username: "",
    avatar: "",
    isUploading: false,
    progress: 0,
    avatarURL: ""
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user })
      console.log("user", user)
    })
  }
// shadow-lg p-3 mb-5 bg-white rounded
  render() {
    return (
      <Container className="mainDisplay">
        <Row>
          <Col lg={5} className="profPic">
            <img className="shadow-lg" src="http://i.pravatar.cc/300"/>
          </Col>

          <Col className="shadow-lg p-3 mb-5 bg-white contentDiv" lg={6}>
            <h3 class="name"> {firebase.auth().currentUser.displayName} </h3>
            <h6 class="email"> {firebase.auth().currentUser.email} </h6>

            <Row className="displayInfo">
              <Col>
                <h6>Friends</h6>
                <Col>
                  <p>1</p>
                </Col>
              </Col>
              <Col>
                <h6>Workouts</h6>
                <Col>
                  <p>12</p>
                </Col>
              </Col>
              <Col>
                <h6>Achievements</h6>
                <Col>
                  <p>16</p>
                </Col>
              </Col>
            </Row>

            <Row className="editButton">
              <Col>
                <Button variant="primary"onClick={this.handleShow}>
                    Edit Profile
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>


          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Edit Profile</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Height</Form.Label>
                  <Form.Control as="select" multiple>
                    <option>4'7"</option>
                    <option>4'8"</option>
                    <option>4'9"</option>
                    <option>4'10"</option>
                    <option>4'11"</option>
                    <option>5'0"</option>
                    <option>5'1"</option>
                    <option>5'2'</option>
                    <option>5'3'</option>
                    <option>5'4'</option>
                    <option>5'5'</option>
                    <option>5'6'</option>
                    <option>5'7'</option>
                    <option>5'8'</option>
                    <option>5'9'</option>
                    <option>5'10'</option>
                    <option>5'11'</option>
                    <option>6'0'</option>
                    <option>6'1'</option>
                    <option>6'2'</option>
                    <option>6'3'</option>
                    <option>6'4'</option>
                    <option>6'5'</option>
                    <option>6'6'</option>
                    <option>6'7'</option>
                    <option>6'8'</option>
                    <option>6'9'</option>
                    <option>6'10'</option>
                    <option>6'11'</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="formWeight">
                  <Form.Label>Weight</Form.Label>
                  <Form.Control type="weight" placeholder="Weight (in lbs)" />
                </Form.Group>
                <p> Select Gender </p>
                <Col sm={10} className="Gender">
                        <Form.Check
                          type="radio"
                          label="Male"
                          name="formHorizontalRadios"
                          id=""
                        />
                        <Form.Check
                          type="radio"
                          label="Female"
                          name="formHorizontalRadios"
                          id=""
                        />
                        <Form.Check
                          type="radio"
                          label="Other"
                          name="formHorizontalRadios"
                          id=""
                        />
                </Col>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={this.handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
      </Container>


    )
  }
}

export default Login
