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
                <div>
                    {this.props.parameters.map(param => {
                        return (
                            <p
                                id={param.parameterName}
                                key={param.parameterName}
                            >
                                {param.value}
                            </p>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default ActivityCard;
