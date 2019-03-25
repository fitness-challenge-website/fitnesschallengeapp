import React, { Component } from 'react';
class ActivityCard extends Component {
    state = {
        name: '',
        parameters: [],
    };
    render() {
        return (
            <div className='container'>
                <p>{this.props.activityName}</p>
                <p>
                    {this.props.parameters.map(param => {
                        return <p id={param.parameterName}>{param.value}</p>;
                    })}
                </p>
            </div>
        );
    }
}

export default ActivityCard;
