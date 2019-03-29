import React, { Component } from 'react';
class ActivityCard extends Component {
	state = {
		name: '',
		parameters: [],
	};
	render() {
		return (
			<div className='container row'>
				<div className='ActivityName'>
					<p>{this.props.activityName}</p>
				</div>
				<div className='ActivityParams'>
					{this.props.parameters.map(param => {
						return (
							<span
								className='m-2'
								id={param.parameterName}
								key={param.parameterName}
							>
								{param.value}
							</span>
						);
					})}
				</div>
			</div>
		);
	}
}

export default ActivityCard;
