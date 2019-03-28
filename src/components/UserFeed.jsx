import React, { Component } from 'react';
import ActivityCard from './ActivityCard';
class UserFeed extends Component {
    state = {};

    fetchRecentActivities = () => {
        //Stub method. Will be replaced with method that will fetch this data from database
        return [
            {
                activityName: 'activity1',
                parameters: [{ parameterName: 'param1', value: 'value1' }],
            },
            {
                activityName: 'activity2',
                parameters: [
                    { parameterName: 'param2', value: 'value2' },
                    { parameterName: 'param3', value: 'value3' },
                ],
            },
        ];
    };

    render() {
        return (
            <div className='container'>
                {/* Get recent activities from database and display cards of each of them */}
                {this.fetchRecentActivities().map(activity => {
                    return (
                        <ActivityCard
                            key={activity.activityName}
                            activityName={activity.activityName}
                            parameters={activity.parameters}
                        />
                    );
                })}
            </div>
        );
    }
}

export default UserFeed;
