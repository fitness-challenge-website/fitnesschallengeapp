import React, { Component } from "react"
import firebase from "firebase"
import axios from 'axios'
import "./newuser.css"
import { Container, Row, Col, Form, Button} from "react-bootstrap"

class NewUser extends Component {
  constructor(props, context) {
    super(props, context);
    this.submitProfile = this.submitProfile.bind(this);
    this.saveProfile = this.saveProfile.bind(this);

    this.state = {
      uid: "",
      username: "",
      // f_name: "",
      // l_name: "",
      age: "",
      weight: "",
      height: ""
      //gender: ""
    };
  }

  submitProfile() {
    var user = firebase.auth().currentUser;
    user.updateProfile({
      displayName: document.getElementById("editName").value
    });
    console.log(this.state);
    axios.post('http://localhost:3210/api/createAccount', {
      uid: firebase.auth().currentUser.uid,
      username: document.getElementById("editUsername").value,
      age: document.getElementById("editAge").value,
      weight: document.getElementById("editWeight").value,
      // height: document.getElementById("editHeight").value,
      height: 170,
      f_name: "josh",
      l_name: "kaplinsky"
    })
      .then(res => console.log(res.data));

    // this.props.history.push('/');
  }

  saveProfile() {
    //calculatePoints();
    this.setState({
        uid: firebase.auth().currentUser.uid,
        username: document.getElementById("editUsername").value,
        age: document.getElementById("editAge").value,
        weight: document.getElementById("editWeight").value,
        height: document.getElementById("editHeight").value,
    }, function() {
      // this.calculatePoints();
      console.log(this.uid);
      this.submitProfile();
    });
  }


  render() {
    return (
      <Container className="contentDiv">
        <Row className="shadow-lg p-3 mb-5 bg-white">
          <Col>
            <h4>Create Profile</h4>
            <Row>
              <Col>
              </Col>
              <Col lg={6}>
                <Form>
                <Form.Group>
                  <Form.Label>First and Last Name</Form.Label>
                  <Form.Control id="editName" type="username" placeholder="Enter First and Last Name"/>
                </Form.Group>
                <Form.Group>
                  <Form.Label>Username</Form.Label>
                  <Form.Control id="editUsername" type="username" placeholder="Enter a Username"/>
                </Form.Group>
                  <Form.Group>
                    <Form.Label>Height</Form.Label>
                    <Form.Control id="editHeight" as="select">
                      <option>4'0"</option>
                      <option>4'1"</option>
                      <option>4'2"</option>
                      <option>4'3"</option>
                      <option>4'4"</option>
                      <option>4'5"</option>
                      <option>4'6"</option>
                      <option>4'7"</option>
                      <option>4'8"</option>
                      <option>4'9"</option>
                      <option>4'10"</option>
                      <option>4'11"</option>
                      <option>5'0"</option>
                      <option>5'1"</option>
                      <option>5'2"</option>
                      <option>5'3"</option>
                      <option>5'4"</option>
                      <option>5'5"</option>
                      <option>5'6"</option>
                      <option>5'7"</option>
                      <option>5'8"</option>
                      <option>5'9"</option>
                      <option>5'10"</option>
                      <option>5'11"</option>
                      <option>6'0"</option>
                      <option>6'1"</option>
                      <option>6'2"</option>
                      <option>6'3"</option>
                      <option>6'4"</option>
                      <option>6'5"</option>
                      <option>6'6"</option>
                      <option>6'7"</option>
                      <option>6'8"</option>
                      <option>6'9"</option>
                      <option>6'10"</option>
                      <option>6'11"</option>
                    </Form.Control>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Weight</Form.Label>
                    <Form.Control id="editWeight" type="text" placeholder="Weight (in lbs)"/>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Age</Form.Label>
                    <Form.Control id="editAge" type="text" placeholder="Enter Age"/>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Gender</Form.Label>
                    <Form.Control id="editGender" as="select">
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </Form.Control>
                  </Form.Group>
                </Form>
                <Button type="primary" onClick={this.submitProfile}>Submit</Button>
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

export default NewUser
