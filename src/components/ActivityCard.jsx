import React, { Component } from 'react';
class ActivityCard extends Component {
	state = {
		name: '',
		duration: '',
		weight: '',
		rep: '',
		distance: '',
		speed: '',
	};
	render() {
		const props = this.props;
		return (
			<div className='container row'>
				<div className='ActivityName'>
					<p>{props.activityName}</p>
				</div>
				<div className='ActivityParams'>
					{props.duration ? (
						<div className='col'>Duration: {props.duration}</div>
					) : null}
					{props.duration ? (
						<div className='col'>Weight: {props.weight}</div>
					) : null}
					{props.duration ? (
						<div className='col'>Reps: {props.rep}</div>
					) : null}
					{props.duration ? (
						<div className='col'>Distance: {props.distance}</div>
					) : null}
					{props.duration ? (
						<div className='col'>Speed: {props.speed}</div>
					) : null}
				</div>
			</div>
		);
	}
}

export default ActivityCard;
