import React, { Component } from 'react'
import axios from 'axios'
import "../index.css"
// import { Button, Form, Container, Row, Col, Modal } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
// import firebase from "firebase"

const User = props => (
    <tr>
        <td>{props.user.username}</td>
        <td>{props.user.f_name}</td>
        <td>{props.user.l_name}</td>
        <td>{props.user.totalPoints}</td>
    </tr>
)

class Leaderboard extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {users: []};
  }

  componentDidMount() {
      axios.post('http://localhost:3210/api/listUsers')
          .then(response => {
              this.setState({ users: response.data });
          })
          .catch(function (error){
              console.log(error);
          })
  }

  userList() {
      return this.state.users.map(function(currentUser, i){
          return <User user={currentUser} key={i} />;
      })
  }

  render() {
		return (
      <Container className="LeaderboardDisplay">
        <h1>Leaderboard</h1>
        <table className="table table-striped" style={{ marginTop: 20 }} >
            <thead>
                <tr>
                    <th>Username</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Total Points</th>
                </tr>
            </thead>
            <tbody>
                { this.userList() }
            </tbody>
        </table>
      </Container>
		);
	}
}

export default Leaderboard;
