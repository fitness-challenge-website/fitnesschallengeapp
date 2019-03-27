import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

class Chart extends Component {
	constructor(props) {
		super(props);
		this.state = {
			chartData: {
				labels: [],
				datasets: [
					{
						label: 'label1',
						data: [],
					},
				],
			},
			timescale: 'Week',
		};
	}

	getChartData = timescale => {
		if (timescale === 'Week') {
			this.setState({
				chartData: {
					labels: [
						'Sunday',
						'Monday',
						'Tuesday',
						'Wednesday',
						'Thursday',
						'Friday',
						'Saturday',
					],
					datasets: [
						{
							label: 'Weekly Data',
							data: [0, 1, 3, 3, 6, 7, 11],
						},
					],
				},
			});
		}
	};

	handleClick = e => {
		this.setState({
			timescale: e.target.id,
			chartdata: this.getChartData(this.state.timescale),
		});
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
