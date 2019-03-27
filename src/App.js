import React, { Component } from 'react';
import './App.css';
import UserDash from './components/UserDash';

class App extends Component {
	render() {
		return (
			<div className='App'>
				<UserDash />
			</div>
		);
	}
}

export default App;
