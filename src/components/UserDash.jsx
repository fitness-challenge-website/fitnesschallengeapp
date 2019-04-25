import React, { Component } from 'react';
import UserFeed from './UserFeed';
import Charts from './Charts';
import { Container, Row } from 'react-bootstrap';
import axios from 'axios';
import firebase from 'firebase';

class UserDash extends Component {
	state = { user_activities: [], loaded: false };

	componentDidMount = () => {
		axios
			.post('http://localhost:3210/api/getUserStats', {
				uid: firebase.auth().currentUser.uid,
			})
			.then(res => {
				this.setState({ user_activities: res.data, loaded: true });
				console.log('Data:', res.data);
			})
			.catch(err => {
				console.log(err);
			});
	};

	render() {
		if (!this.state.loaded) return null;
		return (
			<Container>
				<Row>
					<Charts user_activities={this.state.user_activities} />
				</Row>
				<Row>
					<UserFeed user_activities={this.state.user_activities} />
				</Row>
			</Container>
		);
	}
}

export default UserDash;
