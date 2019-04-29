import React, { Component } from 'react';
import UserFeed from './UserFeed';
import Charts from './Charts';
import { Container, Row } from 'react-bootstrap';
import axios from 'axios';
import firebase from 'firebase';
import './Leaderboard.css';

class UserDash extends Component {

  constructor(props, context) {
    super(props, context);
    this.state = { user_activities: [] };

  }

    componentDidMount = () => {
        axios
            .post('http://localhost:3210/api/getUserStats', {
                uid: firebase.auth().currentUser.uid,
            })
            .then(res => {
                this.setState({ user_activities: res.data });
                console.log('Data:', res.data);
            })
            .catch(err => {
                console.log(err);
            });
    };

    render() {
        if (this.state.user_activities.length === 0) {
            return null;
        }
        return (
        <Container className="mainContainer">
            <Row className="shadow-lg p-3 mb-5 bg-white">
                <Charts user_activities={this.state.user_activities} />
            </Row>
            <Row className="shadow-lg p-3 mb-5 bg-white">
                <UserFeed user_activities={this.state.user_activities} />
            </Row>
        </Container>

      )}
}

export default UserDash;
