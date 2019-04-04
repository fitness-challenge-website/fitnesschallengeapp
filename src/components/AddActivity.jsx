import React, { Component } from 'react'
import axios from 'axios'
import "../index.css"
import { Button, Form, Container, Row, Col, Modal } from 'react-bootstrap'
import firebase from "firebase"

class AddActivity extends Component {

  constructor(props, context) {
    super(props, context);

    this.submitActivity = this.submitActivity.bind(this);
    // TO GET USER ID firebase.auth().currentUser.uid

    this.state = {
      a_name: '',
      a_description: '',
      a_type: '',
      a_duration: '',
      a_distance: ''
    };
  }

  submitActivity() {
    this.setState({
      a_name: document.getElementById("a_name").value,
      a_description: document.getElementById("a_description").value,
      a_type: document.getElementById("a_type").value,
      a_duration: document.getElementById("a_duration").value,
      a_distance: document.getElementById("a_distance").value,
    }, function() {
      console.log(this.state);
      axios.post('http://localhost:3210/api/addActivity', this.state)
        .then(res => console.log(res.data));

      this.props.history.push('/');
    });
  }

  render() {
		return (
      <Container className="addActivityDisplay">
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

          <Button variant="primary" onClick={this.submitActivity}>
            Save Activity
          </Button>

        </Form>
      </Container>
		);
	}
}

export default AddActivity;
