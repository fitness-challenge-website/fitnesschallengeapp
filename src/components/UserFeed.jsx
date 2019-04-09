import React, { Component } from 'react';
import ActivityCard from './ActivityCard';
class UserFeed extends Component {
	state = {};

	fetchRecentActivities = () => {
		//Stub method. Will be replaced with method that will fetch this data from database
		return [
			{
				name: 'Running',
				duration: '30min',
				weight: '',
				rep: '',
				distance: '1mi',
				speed: '',
			},
			{
				name: 'Swimming',
				duration: '30min',
				weight: '',
				rep: '',
				distance: '500m',
				speed: '',
			},
		];
	};

	render() {
		return (
			<div className='container'>
				<h5>Activity Feed</h5>
				{/* Get recent activities from database and display cards of each of them */}
				{this.fetchRecentActivities().map(activity => {
					return (
						<ActivityCard
							key={activity.activityName}
							name={activity.name}
							duration={activity.duration}
							weight={activity.weight}
							rep={activity.rep}
							distance={activity.distance}
							speed={activity.speed}
						/>
					);
				})}
			</div>
		);
	}
}

export default UserFeed;
