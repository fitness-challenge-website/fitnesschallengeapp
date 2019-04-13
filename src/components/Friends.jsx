import React, { Component } from 'react';
import { Col, Row, Container, Button, Form, InputGroup } from 'react-bootstrap';
import axios from 'axios';
import firebase from 'firebase';

class Friends extends Component {
    state = {
        followers: [],
        follows: [],
        uid: firebase.auth().currentUser.uid,
        newfollow: '',
        validated: false,
    };

    // Reads followers in db and stores them in state
    getFollowers = () => {
        axios
            .post('http://localhost:3210/api/getFollowers', {
                uid: this.state.uid,
            })
            .then(res => {
                let data = res.data;
                this.setState({
                    followers: data,
                });
            })
            .catch(err => {
                //alert('No one is following you. How sad.');
                console.log(err);
            });
    };

    // Reads follows from db and stores them in state
    getFollows = () => {
        axios
            .post('http://localhost:3210/api/getFollows', {
                uid: this.state.uid,
            })
            .then(res => {
                let data = res.data;
                this.setState({
                    follows: data,
                });
            })
            .catch(err => {
                //alert('You are following no one! What a loner.');
                console.log(err);
            });
    };

    // Gets followers and follows to display on load
    componentDidMount = () => {
        this.getFollowers();
        this.getFollows();
    };

    // Removes follow from follow list
    handleClick = e => {
        axios
            .post('http://localhost:3210/api/unfollow', { fid: e.target.key })
            .then(() => this.getFollows())
            .catch(err => console.log(err));
    };

    // Used by add follow form, creates follow object for db and then updates follows in state
    handleSubmit = e => {
        e.preventDefault();
        document.getElementById('newFollowForm').reset();
        axios
            .post('http://localhost:3210/api/follow', {
                fid: this.state.newfollow,
            })
            .then(() => this.getFollows())
            .catch(err => console.log(err));
    };

    // Used by add follow form, updates state object with new follow username
    handleChange = e => {
        this.setState({
            newfollow: e.target.value,
        });
    };

    render() {
        return (
            <Container className='p-3'>
                {/* Form for following new person */}
                <Form
                    id='newFollowForm'
                    onSubmit={this.handleSubmit}
                    className='shadow-lg p-3 mb-5 bg-white'
                    lg={8}
                >
                    <Form.Row className='align-items-center'>
                        {/* Entry box */}
                        <Form.Group as={Col} controlId='newFollowName'>
                            <Form.Label className='float-left'>
                                New Follow
                            </Form.Label>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text>@</InputGroup.Text>
                                </InputGroup.Prepend>
                                <Form.Control
                                    type='text'
                                    aria-describedby='inputGroupPrepend'
                                    placeholder='username'
                                    onChange={this.handleChange}
                                    required
                                />
                            </InputGroup>
                            <Form.Text className='float-left'>
                                Enter the username of the person you want to
                                follow.
                            </Form.Text>
                        </Form.Group>
                        {/* Submission button */}
                        <Col>
                            <Button
                                variant='outline-primary'
                                type='submit'
                                className='float-left'
                            >
                                Follow
                            </Button>
                        </Col>
                    </Form.Row>
                </Form>
                {/* Lists of people we follow and who follow us */}
                <Row>
                    {/* People We are following */}
                    <Col className='shadow-lg p-3 mb-5 bg-white'>
                        <h5>Following</h5>
                        {this.state.follows.map(follow => (
                            <Row>
                                <Col>
                                    <p>{follow.followName}</p>
                                </Col>
                                <Col>
                                    <Button
                                        key={follow.fid}
                                        variant='outline-info'
                                        size='sm'
                                        onClick={this.handleClick}
                                    >
                                        Unfollow
                                    </Button>
                                </Col>
                            </Row>
                        ))}
                    </Col>
                    {/* People following us */}
                    <Col className='shadow-lg p-3 mb-5 bg-white leftBar'>
                        <h5>Followers</h5>
                        {this.state.followers.map(follower => (
                            <Row>
                                <p>{follower.followerName}</p>
                            </Row>
                        ))}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Friends;
