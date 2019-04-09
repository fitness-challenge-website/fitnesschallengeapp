import React, { Component } from 'react';
import { Row, Container, Col } from 'react-bootstrap';

class ActivityCard extends Component {
	render() {
		const props = this.props;
		console.log(props);
		return (
			<Container>
				<Row className='container'>
					<Col className='ActivityName'>
						<p>{props.name}</p>
					</Col>
					{props.duration ? (
						<Col>Duration: {props.duration}</Col>
					) : null}
					{props.weight ? <Col>Weight: {props.weight}</Col> : null}
					{props.rep ? <Col>Reps: {props.rep}</Col> : null}
					{props.distance ? (
						<Col>Distance: {props.distance}</Col>
					) : null}
					{props.speed ? <Col>Speed: {props.speed}</Col> : null}
				</Row>
			</Container>
		);
	}
}

export default ActivityCard;
