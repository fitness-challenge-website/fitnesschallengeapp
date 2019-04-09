import React, { Component } from 'react';
import UserFeed from './UserFeed';
import Charts from './Charts';
import { Container, Row } from 'react-bootstrap';
import axios from 'axios';

class UserDash extends Component {
	state = {};

	componentDidMount = () => {
		axios
			.post('http://localhost:3210/api/getUserStats', {
				uid: this.state.uid,
			})
			.then(res => {
				let data = res.data;
				console.log(data);
				// this.setState({
				// 	username: data.username,
				// 	email: data.email,
				// 	f_name: data.f_name,
				// 	l_name: data.l_name,
				// 	height: data.height,
				// 	weight: data.weight,
				// 	age: data.age,
				// });
			})
			.catch(err => {
				alert('Check If you have a data in the user table.');
				console.log(err);
			});
	};

	render() {
		return (
			<Container>
				<Row>
					<Charts />
				</Row>
				<Row>
					<UserFeed />
				</Row>
			</Container>
		);
	}
}

export default UserDash;
