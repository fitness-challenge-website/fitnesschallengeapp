import React, { Component } from 'react';
import { Col, Row, Container } from 'react-bootstrap';
import axios from 'axios';
import firebase from 'firebase';

class FriendsList extends Component {
    state = {
        followers: [],
        following: [],
        uid: firebase.auth().currentUser.uid,
    };

    componentDidMount = () => {
        axios
            .post('http://localhost:3210/api/getFollowing', {
                uid: this.state.uid,
            })
            .then(res => {
                let data = res.data;
                this.setState({
                    friends: data,
                });
            })
            .catch(err => {
                alert('You are following no one! What a loner.');
                console.log(err);
            });

        axios
            .post('http://localhost:3210/api/getFollowers', {
                uid: this.state.uid,
            })
            .then(res => {
                let data = res.data;
                this.setState({
                    friends: data,
                });
            })
            .catch(err => {
                alert('No one is following you. How sad.');
                console.log(err);
            });
    };

    render() {
        return (
            <Container>
                <Col>
                    <h5>Following</h5>
                    {this.state.following.map(follow => {
                        <Row>
                            <p>{follow.followingName}</p>
                        </Row>;
                    })}
                </Col>
                <Col>
                    <h5>Followers</h5>
                    {this.state.followers.map(follower => {
                        <Row>
                            <p>{follower.followerName}</p>
                        </Row>;
                    })}
                </Col>
            </Container>
        );
    }
}

export default FriendsList;
