import React, { Component } from 'react';
import { Container, Form, Row, Col, InputGroup, Button } from 'react-bootstrap';
import firebase from 'firebase';
import axios from 'axios';

class Groups extends Component {
	state = {
		groups: [],
		group_join: '',
		group_create: '',
		selected_group: '',
		uid: firebase.auth().currentUser.uid,
	};

	getGroups = () => {
		axios
			.post('http://localhost:3210/api/getGroups', {
				uid: this.state.uid,
			})
			.then(res => {
				let data = res.data;
				this.setState({
					groups: data,
				});
			})
			.catch(err => {
				//alert('You are in no groups! What a loner.');
				console.log(err);
			});
	};

	componentDidMount = () => {
		this.getGroups();
	};

	handleJoin = e => {
		e.preventDefault();
		document.getElementById('joinGroupForm').reset();
		axios
			.post('http://localhost:3210/api/join', {
				fid: this.state.group_join,
			})
			.then(() => this.getGroups())
			.catch(err => console.log(err));
	};

	handleCreate = e => {
		e.preventDefault();
		document.getElementById('createGroupForm').reset();
		axios
			.post('http://localhost:3210/api/create', {
				fid: this.state.group_create,
			})
			.then(() => this.getGroups())
			.catch(err => console.log(err));
	};

	handleSelect = e => {
		this.setState({
			selected_group: e.target.id,
		});
	};

	handleLeave = e => {
		axios
			.post('http://localhost:3210/api/leave', {
				fid: e.target.id,
			})
			.then(() => this.getGroups())
			.catch(err => console.log(err));
	};

	handleChange = e => {
		this.setState({
			[e.target.id]: e.target.value,
		});
	};

	render() {
		return (
			<Container className='p-3'>
				{/* Form for joining new group */}
				<Form
					id='joinGroupForm'
					onSubmit={this.handleJoin}
					className='shadow-lg p-3 mb-5 bg-white'
					lg={8}
				>
					<Form.Row className='align-items-center'>
						{/* Entry box */}
						<Form.Group as={Col} controlId='newFollowName'>
							<Form.Label className='float-left'>
								Join Group
							</Form.Label>
							<InputGroup>
								<InputGroup.Prepend>
									<InputGroup.Text>@</InputGroup.Text>
								</InputGroup.Prepend>
								<Form.Control
									id='group_join'
									type='text'
									aria-describedby='inputGroupPrepend'
									placeholder='Group Name'
									onChange={this.handleChange}
									required
								/>
							</InputGroup>
							<Form.Text className='float-left'>
								Enter the name of the group you want to join.
							</Form.Text>
						</Form.Group>
						{/* Submission button */}
						<Col>
							<Button
								variant='outline-primary'
								type='submit'
								className='float-left'
							>
								Join
							</Button>
						</Col>
					</Form.Row>
				</Form>
				{/* List of groups we are in */}
				<Row>
					<Col className='shadow-lg p-3 mb-5 bg-white'>
						<h5>Joined Groups</h5>
						{this.state.groups.map(group => (
							<Row>
								{/* Button to select group and list members */}
								<Col>
									<Button
										id={group}
										onClick={this.handleSelect}
									>
										{group.name}
									</Button>
								</Col>
								{/* Button to leave group */}
								<Col>
									<Button
										onClick={this.handleLeave}
										id={group.gid}
									>
										Leave
									</Button>
								</Col>
							</Row>
						))}
					</Col>
					{/* List members of selected group */}
					{this.state.selected_group ? (
						<Col className='shadow-lg p-3 mb-5 bg-white'>
							{this.state.selected_group.members.map(member => (
								<p>{member}</p>
							))}
						</Col>
					) : null}
				</Row>
				<Form
					id='createGroupForm'
					onSubmit={this.handleCreate}
					className='shadow-lg p-3 mb-5 bg-white'
					lg={8}
				>
					<Form.Row className='align-items-center'>
						{/* Entry box */}
						<Form.Group as={Col} controlId='newFollowName'>
							<Form.Label className='float-left'>
								Create Group
							</Form.Label>
							<InputGroup>
								<InputGroup.Prepend>
									<InputGroup.Text>@</InputGroup.Text>
								</InputGroup.Prepend>
								<Form.Control
									id='group_create'
									type='text'
									aria-describedby='inputGroupPrepend'
									placeholder='Group Name'
									onChange={this.handleChange}
									required
								/>
							</InputGroup>
							<Form.Text className='float-left'>
								Enter the name of the group you want to create.
							</Form.Text>
						</Form.Group>
						{/* Submission button */}
						<Col>
							<Button
								variant='outline-success'
								type='submit'
								className='float-left'
							>
								Create
							</Button>
						</Col>
					</Form.Row>
				</Form>
			</Container>
		);
	}
}

export default Groups;
