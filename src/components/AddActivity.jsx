import React, { Component } from 'react'
import axios from 'axios'
import "../index.css"
import { Button, Form, Container, Row, Col } from 'react-bootstrap'
import firebase from "firebase"

// TO GET USER ID firebase.auth().currentUser.uid

class AddActivity extends Component {

  constructor(props, context) {
    super(props, context);

    this.saveActivity = this.saveActivity.bind(this);
    this.calculatePoints = this.calculatePoints.bind(this);
    this.submitActivity = this.submitActivity.bind(this);

    // this.state = {
    //   a_name: '',
    //   a_description: '',
    //   a_type: '',
    //   duration: '',
    //   a_distance: '',
    //   a_points: '',
    //   uid: ''
    // };

    this.state = {
      uid: '',
      duration: ''
    };
  }

  submitActivity() {
    console.log(this.state);
    axios.post('http://localhost:3210/api/addStat', this.state)
      .then(res => console.log(res.data));

    this.props.history.push('/');
  }

  calculatePoints() {
    let points = 0;

    if(this.state.a_type === 'Run' && this.state.a_duration > 0) {
      points = this.state.a_duration * 1;
      alert('Points Earned Running: ' + points)
    }
    else if(this.state.a_type === 'Bike' && this.state.a_duration > 0) {
      points = this.state.a_duration * 0.5;
      alert('Points Earned Biking: ' + points)
    }
    else if(this.state.a_type === 'Swim' && this.state.a_duration > 0) {
      points = this.state.a_duration * 4;
      alert('Points Earned Swimming: ' + points)
    }
    else if(this.state.a_type === 'Lift' && this.state.a_duration > 0) {
      points = this.state.a_duration * 1;
      alert('Points Earned Lifting: ' + points)
    }
    else {
      alert('No activity entered!')
      return
    }

    this.setState({
      a_points: points
    }, function() {
      this.submitActivity();
    });
  }

  saveActivity() {
    //calculatePoints();
    this.setState({
      // a_name: document.getElementById("a_name").value,
      // a_description: document.getElementById("a_description").value,
      // a_type: document.getElementById("a_type").value,
      uid: firebase.auth().currentUser.uid,
      duration: document.getElementById("a_duration").value
      // a_distance: document.getElementById("a_distance").value,
      // uid: firebase.auth().currentUser.uid
    }, function() {
      // this.calculatePoints();
      this.submitActivity();
    });
  }

  render() {
		return (
      <Container className="addActivityDisplay">
      <Row className="shadow-lg p-3 mb-5 bg-white contentDiv">
      <Col>
        <h1>Add New Activity</h1>
        <Form>
          <Form.Group>
            <Form.Label>Activity Name</Form.Label>
            <Form.Control id="a_name" type="" placeholder="ex.   Morning Run" defaultValue={this.state.a_name} />
          </Form.Group>

          <Form.Group>
            <Form.Label>Activity Description</Form.Label>
            <Form.Control id="a_description" type="" placeholder="ex.   Easy jog with Jesse" defaultValue={this.state.a_description} />
          </Form.Group>

          <Form.Group>
            <Form.Label>Activity Type</Form.Label>
            <Form.Control id="a_type" as="select" defaultValue={this.state.a_type} >
            <option>Run</option>
            <option>Bike</option>
            <option>Swim</option>
            <option>Lift</option>
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Activity Duration (mins)</Form.Label>
            <Form.Control id="a_duration" type="" placeholder="25" defaultValue={this.state.a_duration} />
          </Form.Group>

          <Form.Group>
            <Form.Label>Activity Distance (miles)</Form.Label>
            <Form.Control id="a_distance" type="" placeholder="3" defaultValue={this.state.a_distance} />
          </Form.Group>

          <Button variant="primary" onClick={this.saveActivity}>
            Save Activity
          </Button>

        </Form>
        </Col>
        </Row>
      </Container>
		);
	}
}

export default AddActivity;
