import React, { Component } from 'react';
import axios from 'axios';
import '../index.css';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';
import firebase from 'firebase';

class AddActivity extends Component {
	constructor(props, context) {
		super(props, context);

		this.state = {
			name: '',
			description: '',
			type: 'Run',
			duration: '',
			weight: '',
			rep: '',
			distance: '',
			speed: '',
			point: '',
			uid: firebase.auth().currentUser.uid,
		};
	}

	submitActivity = () => {
		console.log(this.state);
		axios
			.post('http://localhost:3210/api/addStat', this.state)
			.then(res => console.log(res.data));

		this.props.history.push('/');
	};

	calculatePoints = () => {
		let points = 0;

		if (this.state.type === 'Run' && this.state.duration > 0) {
			points = this.state.duration * 1;
			alert('Points Earned Running: ' + points);
		} else if (this.state.type === 'Bike' && this.state.duration > 0) {
			points = this.state.duration * 0.5;
			alert('Points Earned Biking: ' + points);
		} else if (this.state.type === 'Swim' && this.state.duration > 0) {
			points = this.state.duration * 4;
			alert('Points Earned Swimming: ' + points);
		} else if (this.state.type === 'Lift' && this.state.duration > 0) {
			points = this.state.duration * 1;
			alert('Points Earned Lifting: ' + points);
		} else {
			alert('No activity entered!');
			return;
		}

		return points;
	};

	handleClick = e => {
		this.setState(
			{
				[e.target.id]: e.target.value,
			},
			() => console.log(this.state),
		);
	};

	handleSubmit = e => {
		e.preventDefault();
		this.setState({ point: this.calculatePoints() }, () =>
			this.submitActivity(),
		);
	};

	render() {
		const type = this.state.type;
		const showDuration = ['Run', 'Bike', 'Swim', 'Exercise'].includes(type);
		const showWeight = ['Lift'].includes(type);
		const showRep = ['Lift', 'Exercise'].includes(type);
		const showDistance = ['Run', 'Bike', 'Swim'].includes(type);
		const showSpeed = ['Run', 'Bike', 'Swim'].includes(type);

		return (
			<Container className='addActivityDisplay'>
				<Row className='shadow-lg p-3 mb-5 bg-white contentDiv'>
					<Col>
						<h1>Add New Activity</h1>
						<Form>
							<Form.Group>
								<Form.Label>Activity Name</Form.Label>
								<Form.Control
									id='name'
									type=''
									placeholder='ex.   Morning Run'
									defaultValue={this.state.name}
									onClick={this.handleClick}
								/>
							</Form.Group>

							<Form.Group>
								<Form.Label>Activity Description</Form.Label>
								<Form.Control
									id='description'
									type=''
									placeholder='ex.   Easy jog with Jesse'
									defaultValue={this.state.description}
									onClick={this.handleClick}
								/>
							</Form.Group>

							<Form.Group>
								<Form.Label>Activity Type</Form.Label>
								<Form.Control
									id='type'
									as='select'
									defaultValue={this.state.type}
									onClick={this.handleClick}
								>
									<option>Run</option>
									<option>Bike</option>
									<option>Swim</option>
									<option>Lift</option>
									<option>Exercise</option>
								</Form.Control>
							</Form.Group>

							{showDuration ? (
								<Form.Group>
									<Form.Label>
										Activity Duration (mins)
									</Form.Label>
									<Form.Control
										id='duration'
										placeholder='25'
										onClick={this.handleClick}
									/>
								</Form.Group>
							) : null}

							{showWeight ? (
								<Form.Group>
									<Form.Label>
										Activity Weight (lbs)
									</Form.Label>
									<Form.Control
										id='weight'
										placeholder='25'
										onClick={this.handleClick}
									/>
								</Form.Group>
							) : null}

							{showRep ? (
								<Form.Group>
									<Form.Label>
										Activity Reps (count)
									</Form.Label>
									<Form.Control
										id='duration'
										placeholder='25'
										onClick={this.handleClick}
									/>
								</Form.Group>
							) : null}

							{showDistance ? (
								<Form.Group>
									<Form.Label>
										Activity Distance (miles)
									</Form.Label>
									<Form.Control
										id='distance'
										placeholder='3'
										onClick={this.handleClick}
									/>
								</Form.Group>
							) : null}

							{showSpeed ? (
								<Form.Group>
									<Form.Label>
										Activity Speed (mph)
									</Form.Label>
									<Form.Control
										id='speed'
										placeholder='10'
										onClick={this.handleClick}
									/>
								</Form.Group>
							) : null}

							<Button
								variant='primary'
								onClick={this.saveActivity}
							>
								Save Activity
							</Button>
						</Form>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default AddActivity;
