import React, { Component } from 'react';
import ActivityCard from './ActivityCard';
import { Container } from 'react-bootstrap';
class UserFeed extends Component {
	state = {};

	fetchRecentActivities = () => {
		//Stub method. Will be replaced with method that will fetch this data from database
		return [
			{
				name: 'Running',
				duration: '30min',
				distance: '1mi',
			},
			{
				name: 'Swimming',
				duration: '30min',
				distance: '500m',
			},
		];
	};

	render() {
		return (
			<Container>
				<h5>Activity Feed</h5>
				{/* Get recent activities from database and display cards of each of them */}
				{this.fetchRecentActivities().map(activity => {
					return (
						<ActivityCard
							key={activity.name}
							name={activity.name}
							duration={activity.duration}
							weight={activity.weight}
							rep={activity.rep}
							distance={activity.distance}
							speed={activity.speed}
						/>
					);
				})}
			</Container>
		);
	}
}

export default UserFeed;
