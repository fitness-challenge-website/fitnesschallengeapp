import React, { Component } from 'react'
import axios from 'axios'
import "../index.css"
// import { Button, Form, Container, Row, Col, Modal } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
// import firebase from "firebase"

const Activity = props => (
    <tr>
        <td>{props.activity.a_name}</td>
    </tr>
)

class Leaderboard extends Component {

  constructor(props, context) {
    super(props, context);

    // TO GET USER ID firebase.auth().currentUser.uid

    this.state = {activities: []};
  }

  componentDidMount() {
      axios.post('http://localhost:3210/api/listActivities')
          .then(response => {
              this.setState({ activities: response.data });
          })
          .catch(function (error){
              console.log(error);
          })
  }

  activityList() {
      return this.state.activities.map(function(currentActivity, i){
          return <Activity activity={currentActivity} key={i} />;
      })
  }

  render() {
		return (
      <Container className="LeaderboardDisplay">
        <h1>Leaderboard</h1>
        <table className="table table-striped" style={{ marginTop: 20 }} >
            <thead>
                <tr>
                    <th>Activity Name</th>
                </tr>
            </thead>
            <tbody>
                { this.activityList() }
            </tbody>
        </table>
      </Container>
		);
	}
}

export default Leaderboard;
