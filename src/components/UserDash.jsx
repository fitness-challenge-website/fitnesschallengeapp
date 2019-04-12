import React, { Component } from 'react';
import UserFeed from './UserFeed';
import Charts from './Charts';
import { Container, Row } from 'react-bootstrap';
import axios from 'axios';
import firebase from 'firebase';

class UserDash extends Component {
	state = { user_activities: [] };

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
		return (
			<Container>
				<Row>
					<Charts props={this.state.user_activities} />
				</Row>
				<Row>
					<UserFeed props={this.state.user_activities} />
				</Row>
			</Container>
		);
	}
}

export default UserDash;
