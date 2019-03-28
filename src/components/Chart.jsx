import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            //Structure that chart.js interprets and renders chart from
            chartData: {
                labels: [],
                datasets: [
                    {
                        label: '',
                        data: [],
                    },
                ],
            },
            //Time scale to display chart in
            timescale: '',
            //User activity logs to be parsed for chart data
            dailyLog: [],
            monthlyLog: [],
        };
    }

    //On component loading
    componentDidMount = () => {
        this.initializeActivityLog();
    };

    //Get activity logs from database
    initializeActivityLog = () => {
        //Mock activity log with random data
        let dailyLog = [];
        let monthlyLog = [];
        for (let i = 0; i < 30; i++) {
            dailyLog[i] = Math.floor(Math.random() * 10);
        }
        for (let i = 0; i < 12; i++) {
            monthlyLog[i] = Math.floor(Math.random() * 100);
        }

        //Update state with activity logs and update the chart
        this.setState(
            {
                timescale: 'Week',
                dailyLog: dailyLog,
                monthlyLog: monthlyLog,
                //chartData: this.setChartTimeScale('Week'),
            },
            () => this.setChartTimeScale('Week'),
        );
    };

    //Sets the time scale for chart data granularity. Automatically renders one unit of past activity.
    setChartTimeScale = timescale => {
        let moment = require('moment');
        moment().format();
        let labels = [];
        let data = [];
        let dataLabel = '';
        if (timescale === 'Week') {
            for (let i = 0; i < 7; i++) {
                labels[7 - i] = moment()
                    .subtract(i, 'day')
                    .format('dddd');
                data[i] = this.getNumActivities('Day', i + 23);
            }
            dataLabel = 'Week';
        } else if (timescale === 'Month') {
            for (let i = 0; i < 30; i++) {
                labels[30 - i] = moment()
                    .subtract(i, 'day')
                    .format('MMM Do');
                data[i] = this.getNumActivities('Day', i);
            }
            dataLabel = 'Month';
        } else if (timescale === 'Year') {
            for (let i = 0; i < 12; i++) {
                labels[12 - i] = moment()
                    .subtract(i, 'month')
                    .format('MMMM YY');
                data[i] = this.getNumActivities('Month', i);
            }
            dataLabel = 'Year';
        }
        this.updateChartData(labels, dataLabel, data);
    };

    //A setstate wrapper to update the chartdata method.
    updateChartData = (labels, dataLabel, data) => {
        this.setState({
            chartData: {
                labels: labels,
                datasets: [
                    {
                        label: dataLabel,
                        data: data,
                    },
                ],
            },
        });
    };

    //Accesses the number of activities completed on the given number of the given timescale.
    //I.e. month 4 would return the number of activities completed 8 months ago.
    getNumActivities = (timescale, date) => {
        if (timescale === 'Day') {
            return this.state.dailyLog[date];
        } else if (timescale === 'Month') {
            return this.state.monthlyLog[date];
        }
    };

    handleClick = e => {
        this.setState({
            timescale: e.target.id,
        });
        this.setChartTimeScale(e.target.id);
    };

    render() {
        return (
            <div className='container'>
                <div className='dropdown'>
                    <button
                        className='btn btn-secondary dropdown-toggle m-2'
                        type='button'
                        id='dropdownMenu2'
                        data-toggle='dropdown'
                        aria-haspopup='true'
                        aria-expanded='false'
                    >
                        {this.state.timescale}
                    </button>
                    <div
                        className='dropdown-menu'
                        aria-labelledby='dropdownMenu2'
                    >
                        <button
                            className='dropdown-item'
                            type='button'
                            onClick={this.handleClick}
                            id='Week'
                        >
                            Week
                        </button>
                        <button
                            className='dropdown-item'
                            type='button'
                            onClick={this.handleClick}
                            id='Month'
                        >
                            Month
                        </button>
                        <button
                            className='dropdown-item'
                            type='button'
                            onClick={this.handleClick}
                            id='Year'
                        >
                            Year
                        </button>
                    </div>
                </div>
                <Line
                    data={this.state.chartData}
                    options={{
                        title: {
                            display: true,
                            text: 'Chart Title',
                            fontSize: 25,
                        },
                        legend: {
                            display: true,
                            position: 'right',
                        },
                    }}
                />
            </div>
        );
    }
}

export default Chart;
