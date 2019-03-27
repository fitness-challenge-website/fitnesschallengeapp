import React, { Component } from 'react';
import UserFeed from './UserFeed';
import Chart from './Chart';
class UserDash extends Component {
	state = {};
	render() {
		return (
			<div className='container'>
				<Chart />
				<UserFeed />
			</div>
		);
	}
}

export default UserDash;
