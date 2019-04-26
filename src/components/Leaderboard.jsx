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
        <td>{props.user.totalpoints}</td>
    </tr>
)

class Leaderboard extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {users: [],
      direction: {
        totalpoints:'desc',
      }

  };
this.onSort=this.onSort.bind(this);
this.sortByPoints = this.sortByPoints.bind(this);
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

  onSort(event, key) {
    this.setState({
      users: this.state.users.sort( (a, b) => (
        this.state.direction[key] === 'desc'
          ? a[key].localeCompare(b[key])
          : b[key].localeCompare(a[key])
      )),
      direction: {
        [key]: this.state.direction[key] === 'desc'
          ? 'asc'
          : 'desc'
      }
    })
  }

  sortByPoints(event, key) {
    this.setState({
      users: this.state.users.sort( (a, b) => (
        this.state.direction[key] === 'desc'
          ? b[key] - a[key]
          : a[key] - b[key]
      )),
      direction: {
        [key]: this.state.direction[key] === 'desc'
          ? 'asc'
          : 'desc'
      }
    })
  }

  userList() {
    this.state.users.sort((a, b) => b.totalpoints - a.totalpoints);
      return this.state.users.map(function(currentUser, i){
          return <User.totalpoints user={currentUser} key={i} />;
      })
  }


  render() {
    var newusers=this.state.users;
		return (
      <Container className="LeaderboardDisplay">
        <h1>Leaderboard</h1>
        <table className="table table-striped" style={{ marginTop: 20 }} >
            <thead>
                <tr>
                    <th onClick={e=>this.onSort(e, 'username')}>Username</th>
                    <th onClick={e=>this.onSort(e, 'f_name')}>First Name</th>
                    <th onClick={e=>this.onSort(e, 'l_name')}>Last Name</th>
                    <th onClick={e=>this.sortByPoints(e, 'totalpoints')}>Total Points</th>
                </tr>
            </thead>
            <tbody>
              {newusers.map(function(currentUser, i){
                return(
                  <tr key={i} data-item={currentUser}>
                    <td data-title="Username">{currentUser.username}</td>
                    <td data-title="First Name">{currentUser.f_name}</td>
                    <td data-title="Last Name">{currentUser.l_name}</td>
                    <td data-title="Total Points">{currentUser.totalpoints}</td>
                  </tr>

                );
              })}
            </tbody>
        </table>
      </Container>
		);
	}
}

export default Leaderboard;
