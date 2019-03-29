import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class Charts extends Component {
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
			cumulativeData: {
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
		let cumulativeData = [];

		let numPoints, unit, format;
		let offset = 0;
		if (timescale === 'Week') {
			numPoints = 7;
			unit = 'day';
			format = 'dddd';
			offset = 23;
		} else if (timescale === 'Month') {
			numPoints = 30;
			unit = 'day';
			format = 'MMM Do';
		} else if (timescale === 'Year') {
			numPoints = 12;
			unit = 'month';
			format = 'MMMM YY';
		}

		for (let i = 0; i < numPoints; i++) {
			labels[numPoints - i - 1] = moment()
				.subtract(i, unit)
				.format(format);
			data[i] = this.getNumActivities('Day', i + offset);
			if (i === 0) {
				cumulativeData[0] = data[0];
			} else {
				cumulativeData[i] = cumulativeData[i - 1] + data[i];
			}
		}
		this.updateChartData(labels, timescale, data, cumulativeData);
	};

	//A setstate wrapper to update the chartdata method.
	updateChartData = (labels, dataLabel, chartData, cumulativeData) => {
		this.setState({
			chartData: {
				labels: labels,
				datasets: [
					{
						label: dataLabel,
						data: chartData,
					},
				],
			},
			cumulativeData: {
				labels: labels,
				datasets: [
					{
						label: dataLabel,
						data: cumulativeData,
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
				<div className='TimeScaleSelect'>
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
				</div>
				<div className='row'>
					<div className='col'>
						<Line
							className='ActivitiesPerTimeChart'
							data={this.state.chartData}
							options={{
								title: {
									display: true,
									text: 'Activities Per Time',
									fontSize: 25,
								},
								legend: {
									display: true,
									position: 'right',
								},
							}}
						/>
					</div>
					<div className='col'>
						<Line
							className='ActivitiesOverTimeChart'
							data={this.state.cumulativeData}
							options={{
								title: {
									display: true,
									text: 'Activities Over Time',
									fontSize: 25,
								},
								legend: {
									display: true,
									position: 'right',
								},
							}}
						/>
					</div>
				</div>
			</div>
		);
	}
}

export default Charts;
