import React, { Component } from 'react';
import UserFeed from './UserFeed';
import Charts from './Charts';
class UserDash extends Component {
	state = {};
	render() {
		return (
			<div className='container'>
				<div className='row'>
					<Charts />
				</div>
				<div className='row'>
					<UserFeed />
				</div>
			</div>
		);
	}
}

export default UserDash;
