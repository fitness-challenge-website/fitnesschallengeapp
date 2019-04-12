import React, { Component } from 'react';
import { Container, Form, Row, Col, InputGroup, Button } from 'react-bootstrap';
import firebase from 'firebase';
import axios from 'axios';

class Groups extends Component {
    state = {
        groups: [],
        group_join: '',
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

    handleSubmit = e => {
        e.preventDefault();
        document.getElementById('joinGroupForm').reset();
        axios
            .post('http://localhost:3210/api/join', {
                fid: this.state.group_join,
            })
            .then(() => this.getGroups())
            .catch(err => console.log(err));
    };

    handleChange = e => {
        this.setState({
            group_join: e.target.value,
        });
    };

    render() {
        return (
            <Container className='p-3'>
                {/* Form for joining new group */}
                <Form
                    id='joinGroupForm'
                    onSubmit={this.handleSubmit}
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
                                <Col>
                                    <p>{group.name}</p>
                                </Col>
								<Col>
									<Button>
										
									</Button>
								</Col>
                            </Row>
                        ))}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Groups;
