import React, { Component } from 'react'
import axios from 'axios'
import "../index.css"
// import { Button, Form, Container, Row, Col, Modal } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import firebase from "firebase"

const Following = props => (
    <tr>
        <td>{props.following.username}</td>
        <td>{props.following.f_name}</td>
        <td>{props.following.l_name}</td>
        <td>{props.following.totalpoints}</td>
    </tr>
)

class FriendLeaderboard extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      following: [],
      uid: firebase.auth().currentUser.uid,
      direction: {
        totalpoints:'desc',
      }

  };

}

getFollowing = () => {
  axios
    .post('http://localhost:3210/api/listFollowing', {
      follower_uid: this.state.uid,
    })
    .then(res => {
      let data = res.data;
      console.log(data);
      this.setState({
        following: data,
      });
    })
    .catch(err => {
      alert('You are following no one! What a loner.');
      console.log(err);
    });
};

componentDidMount = () => {
  this.getFollowing();
};

  userFollowing() {
    this.state.following.sort((a, b) => b.totalpoints - a.totalpoints);
      return this.state.following.map(function(currentUser, i){
          return <Following.totalpoints user={currentUser} key={i} />;
      })
  }


  render() {

		return (
      <Container className="FriendLeaderboardDisplay">
        <h1>Friend Leaderboard</h1>
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
              {this.userFollowing()}
            </tbody>
        </table>
      </Container>
		);
	}
}

export default FriendLeaderboard;
