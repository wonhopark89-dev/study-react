import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import notify from './notify';

// function App() {
// 	// function import 는 Promise 객체를 반환한다.
// 	const onClick = () => {
// 		import('./notify').then((result) => result.default());
// 	};

// 	return (
// 		<div className="App">
// 			<header className="App-header">
// 				<img src={logo} className="App-logo" alt="logo" />
// 				<p onClick={onClick}>Hello React</p>
// 			</header>
// 		</div>
// 	);
// }

class App extends Component {
	state = {
		SplitMe: null,
	};
	handleClick = async () => {
		const loadedModule = await import('./SplitMe');
		this.setState({ SplitMe: loadedModule.default });
	};

	render() {
		const { SplitMe } = this.state;
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<p onClick={this.handleClick}>Hello React</p>
					{SplitMe && <SplitMe />}
				</header>
			</div>
		);
	}
}

export default App;
