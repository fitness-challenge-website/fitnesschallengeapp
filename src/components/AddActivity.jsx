import React, { Component } from 'react'
import axios from 'axios'
import "../index.css"
import { Button, Form, Container, Row, Col } from 'react-bootstrap'
import firebase from "firebase"

class AddActivity extends Component {

  constructor(props, context) {
    super(props, context);

    this.saveActivity = this.saveActivity.bind(this);
    this.calculatePoints = this.calculatePoints.bind(this);
    this.submitActivity = this.submitActivity.bind(this);

    this.state = {
      uid: '',
      name: '',
      description: '',
      type: '',
      duration: '',
      distance: '',
      points: '',
      weight: '',
      updatedAt: ''
    };
  }

  componentDidMount = () => {
    axios.post('http://localhost:3210/api/getUserData', {uid: firebase.auth().currentUser.uid})
    .then(res => {
      let data = res.data;
      this.setState({
        weight: data.weight
      });
    }).catch(err => {

      console.log(err);
    });


  }

  submitActivity() {
    let curPoints;
    let newPoints = {
      uid: '',
      totalpoints: ''
    };
    axios.post('http://localhost:3210/api/getPoints', this.state)
      .then(res => {
        curPoints = res.data;
        newPoints.uid = this.state.uid;
        newPoints.totalpoints = curPoints.totalpoints + this.state.points;
        axios.post('http://localhost:3210/api/updatePoints',newPoints)
          .then(res => console.log(res.data));
    });
    axios.post('http://localhost:3210/api/addStat', this.state)
      .then(res => console.log(res.data));

    this.props.history.push('/');
  }

  calculatePoints() {
    console.log(this.state);

    let points = 0;

    if(this.state.name === '') {
      alert('No Activity Name entered!')
      return
    }
    else if(this.state.description === '') {
      alert('No Activity Description entered!')
      return
    }
    else if(this.state.duration <= 0) {
      alert('No Activity Duration entered!')
      return
    }
    else if( ( this.state.type === 'Running' ||
                this.state.type === 'Biking' ||
                this.state.type === 'Swimming' ) &&
                this.state.distance <= 0) {
      alert('No Activity Distance entered!')
      return
    }
    else if(this.state.type === 'Running' && this.state.weight <=120) {
      points = this.state.duration * 0.7;
      alert('Points Earned Running: ' + points)
    }
    else if(this.state.type === 'Running' && this.state.weight >120 && this.state.weight<=140) {
      points = this.state.duration * 1;
      alert('Points Earned Running: ' + points)
    }
    else if(this.state.type === 'Running' && this.state.weight >140 && this.state.weight<=160) {
      points = this.state.duration * 1.3;
      alert('Points Earned Running: ' + points)
    }
    else if(this.state.type === 'Running' && this.state.weight >160 && this.state.weight<=180) {
      points = this.state.duration * 1.6;
      alert('Points Earned Running: ' + points)
    }
    else if(this.state.type === 'Running' && this.state.weight >180 && this.state.weight<200) {
      points = this.state.duration * 1.9;
      alert('Points Earned Running: ' + points)
    }
    else if(this.state.type === 'Running' && this.state.weight >=200) {
      points = this.state.duration * 2.2;
      alert('Points Earned Running: ' + points)
    }
    else if(this.state.type === 'Biking' && this.state.weight <=120) {
      points = this.state.duration * 0.2;
      alert('Points Earned Biking: ' + points)
    }
    else if(this.state.type === 'Biking' && this.state.weight >120 && this.state.weight<=140) {
      points = this.state.duration * 0.5;
      alert('Points Earned Biking: ' + points)
    }
    else if(this.state.type === 'Biking' && this.state.weight >140 && this.state.weight<=160) {
      points = this.state.duration * 0.8;
      alert('Points Earned Biking: ' + points)
    }
    else if(this.state.type === 'Biking' && this.state.weight >160 && this.state.weight<=180) {
      points = this.state.duration * 1.1;
      alert('Points Earned Biking: ' + points)
    }
    else if(this.state.type === 'Biking' && this.state.weight >180 && this.state.weight<200) {
      points = this.state.duration * 1.3;
      alert('Points Earned Biking: ' + points)
    }
    else if(this.state.type === 'Biking' && this.state.weight >=200) {
      points = this.state.duration * 1.6;
      alert('Points Earned Biking: ' + points)
    }
    else if(this.state.type === 'Swimming'&& this.state.weight <=120 ) {
      points = this.state.duration * 2.2;
      alert('Points Earned Swimming: ' + points)
    }
    else if(this.state.type === 'Swimming'&& this.state.weight >120 && this.state.weight<=140) {
      points = this.state.duration * 2.5;
      alert('Points Earned Swimming: ' + points)
    }
    else if(this.state.type === 'Swimming'&& this.state.weight >140 && this.state.weight<=160) {
      points = this.state.duration * 2.8;
      alert('Points Earned Swimming: ' + points)
    }
    else if(this.state.type === 'Swimming'&& this.state.weight >160 && this.state.weight<=180) {
      points = this.state.duration * 3.1;
      alert('Points Earned Swimming: ' + points)
    }
    else if(this.state.type === 'Swimming'&& this.state.weight >180 && this.state.weight<200) {
      points = this.state.duration * 3.4;
      alert('Points Earned Swimming: ' + points)
    }
    else if(this.state.type === 'Swimming'&& this.state.weight >=200 ) {
      points = this.state.duration * 3.7;
      alert('Points Earned Swimming: ' + points)
    }
    else if(this.state.type === 'Weight Lifting'&&this.state.weight <=120 ) {
      points = this.state.duration * 0.7;
      alert('Points Earned Weight Lifting: ' + points)
    }
    else if(this.state.type === 'Weight Lifting'&&this.state.weight >120 && this.state.weight<=140) {
      points = this.state.duration * 1;
      alert('Points Earned Weight Lifting: ' + points)
    }
    else if(this.state.type === 'Weight Lifting'&&this.state.weight >140 && this.state.weight<=160) {
      points = this.state.duration * 1.3;
      alert('Points Earned Weight Lifting: ' + points)
    }
    else if(this.state.type === 'Weight Lifting'&&this.state.weight >160 && this.state.weight<=180) {
      points = this.state.duration * 1.6;
      alert('Points Earned Weight Lifting: ' + points)
    }
    else if(this.state.type === 'Weight Lifting'&&this.state.weight >180 && this.state.weight<200) {
      points = this.state.duration * 1.9;
      alert('Points Earned Weight Lifting: ' + points)
    }
    else if(this.state.type === 'Weight Lifting'&&this.state.weight >=200 ) {
      points = this.state.duration * 2.2;
      alert('Points Earned Weight Lifting: ' + points)
    }
    else if(this.state.type === 'Team Sports'&&this.state.weight <=120 ) {
      points = this.state.duration * 0.4;
      alert('Points Earned in Team Sports: ' + points)
    }
    else if(this.state.type === 'Team Sports'&&this.state.weight >120 && this.state.weight<=140) {
      points = this.state.duration * 0.7;
      alert('Points Earned in Team Sports: ' + points)
    }
    else if(this.state.type === 'Team Sports'&&this.state.weight >140 && this.state.weight<=160) {
      points = this.state.duration * 1;
      alert('Points Earned in Team Sports: ' + points)
    }
    else if(this.state.type === 'Team Sports'&&this.state.weight >160 && this.state.weight<=180) {
      points = this.state.duration * 1.3;
      alert('Points Earned in Team Sports: ' + points)
    }
    else if(this.state.type === 'Team Sports'&&this.state.weight >180 && this.state.weight<200) {
      points = this.state.duration * 1.6;
      alert('Points Earned in Team Sports: ' + points)
    }
    else if(this.state.type === 'Team Sports'&&this.state.weight >=200 ) {
      points = this.state.duration * 1.9;
      alert('Points Earned in Team Sports: ' + points)
    }
    else if(this.state.type === 'Other Exercise'&&this.state.weight <=120 ) {
      points = this.state.duration * 0.5;
      alert('Points Earned in Other Exercise: ' + points)
    }
    else if(this.state.type === 'Other Exercise'&&this.state.weight >120 && this.state.weight<=140) {
      points = this.state.duration * 0.8;
      alert('Points Earned in Other Exercise: ' + points)
    }
    else if(this.state.type === 'Other Exercise'&&this.state.weight >140 && this.state.weight<=160) {
      points = this.state.duration * 1.1;
      alert('Points Earned in Other Exercise: ' + points)
    }
    else if(this.state.type === 'Other Exercise'&&this.state.weight >160 && this.state.weight<=180) {
      points = this.state.duration * 1.4;
      alert('Points Earned in Other Exercise: ' + points)
    }
    else if(this.state.type === 'Other Exercise'&&this.state.weight >180 && this.state.weight<200) {
      points = this.state.duration * 1.7;
      alert('Points Earned in Other Exercise: ' + points)
    }
    else if(this.state.type === 'Other Exercise'&&this.state.weight >=200 ) {
      points = this.state.duration * 2;
      alert('Points Earned in Other Exercise: ' + points)
    }
    else {
      alert('Error!!')
      return
    }


    this.setState({
      points: points
    }, function() {
      this.submitActivity();
    });
  }

  saveActivity() {
    this.setState({
      uid: firebase.auth().currentUser.uid,
      name: document.getElementById("name").value,
      description: document.getElementById("description").value,
      type: document.getElementById("type").value,
      duration: document.getElementById("duration").value,
      distance: ( (document.getElementById("distance").value === '') ? 0 : document.getElementById("distance").value),
      updatedAt: new Date().toLocaleString()
    }, function() {
      this.calculatePoints();
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
            <Form.Control id="name" type="" placeholder="ex.   Morning Run" defaultValue={this.state.name} />
          </Form.Group>

          <Form.Group>
            <Form.Label>Activity Description</Form.Label>
            <Form.Control id="description" type="" placeholder="ex.   Easy jog with Jesse" defaultValue={this.state.description} />
          </Form.Group>

          <Form.Group>
            <Form.Label>Activity Type</Form.Label>
            <Form.Control id="type" as="select" defaultValue={this.state.type} >
            <option>Running</option>
            <option>Biking</option>
            <option>Swimming</option>
            <option>Weight Lifting</option>
            <option>Team Sports</option>
            <option>Other Exercise</option>
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Activity Duration (mins)</Form.Label>
            <Form.Control id="duration" type="" placeholder="22.5" defaultValue={this.state.duration} />
          </Form.Group>

          <Form.Group>
            <Form.Label>Activity Distance (miles)</Form.Label>
            <Form.Control id="distance" type="" placeholder="3.15" defaultValue={this.state.distance} />
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
