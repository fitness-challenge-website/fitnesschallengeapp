import React, { Component } from 'react';
import {
    Container,
    Form,
    Row,
    Col,
    InputGroup,
    Button,
    Alert,
} from 'react-bootstrap';
import firebase from 'firebase';
import axios from 'axios';
import './Groups.css';

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
            .then(() => {
                this.getGroups();
                this.setState({
                    show: true,
                    action: 'joined',
                });
            })
            .catch(err => console.log(err));
    };

    handleCreate = e => {
        e.preventDefault();
        document.getElementById('createGroupForm').reset();
        axios
            .post('http://localhost:3210/api/create', {
                fid: this.state.group_create,
            })
            .then(() => {
                this.getGroups();
                this.setState({ show: true, action: 'created' });
            })
            .catch(err => console.log(err));
    };

    handleLeave = e => {
        axios
            .post('http://localhost:3210/api/leave', {
                fid: e.target.id,
            })
            .then(() => {
                this.getGroups();
                this.setState({ show: true, action: 'left' });
            })
            .catch(err => console.log(err));
    };

    handleSelect = e => this.setState({ selected_group: e.target.id });
    handleChange = e => this.setState({ [e.target.id]: e.target.value });
    handleClose = () => this.setState({ show: false });

    render() {
        return (
            <Container className='mainContainer'>
                <Form id='joinGroupForm' onSubmit={this.handleJoin}>
                    <Row className='shadow-lg p-3 mb-5 bg-white'>
                        <Col lg={10}>
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
                                        Enter the name of the group you want to
                                        join.
                                    </Form.Text>
                                </Form.Group>
                                {/* Submission button */}
                            </Form.Row>
                        </Col>
                        <Col lg={2} className='joinGroup'>
                            <Button
                                variant='outline-primary'
                                type='submit'
                                className='float-left'
                            >
                                Join
                            </Button>
                        </Col>
                    </Row>
                </Form>

                <Row className='shadow-lg p-3 mb-5 bg-white'>
                    <Col>
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
                        <Col>
                            {this.state.selected_group.members.map(member => (
                                <p>{member}</p>
                            ))}
                        </Col>
                    ) : null}
                </Row>

                <Form id='createGroupForm' onSubmit={this.handleCreate}>
                    <Row className='shadow-lg p-3 mb-5 bg-white'>
                        <Col lg={10}>
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
                                        Enter the name of the group you want to
                                        create.
                                    </Form.Text>
                                </Form.Group>
                            </Form.Row>
                        </Col>
                        <Col lg={2} className='joinGroup'>
                            <Button
                                variant='outline-success'
                                type='submit'
                                className='float-left'
                            >
                                Create
                            </Button>
                        </Col>
                    </Row>
                </Form>
                <Alert
                    dismissable
                    show={this.state.alert}
                    variant='success'
                    onClose={this.handleClose}
                >
                    <p>
                        You have successfully {this.state.action} the{' '}
                        {this.state.group_join} group!
                    </p>
                </Alert>
            </Container>
        );
    }
}

export default Groups;
