import React, { Component } from 'react';
import UserFeed from './UserFeed';
class UserDash extends Component {
    state = {};
    render() {
        return (
            <div className='container'>
                <UserFeed />
            </div>
        );
    }
}

export default UserDash;
