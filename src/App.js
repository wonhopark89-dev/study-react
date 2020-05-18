import React, { Component } from 'react';
import './App.css';
import MyComponent from './MyComponent';
import Say from './Say';
import EventPractice from './EventPractice';
import ValidationSample from './ValidationSample';
import ScrollBox from './ScrollBox';
import IterationSample from './iterationSample';
import Counter from './Counter';
import Info from './Info';
import Average from './Average';
import SassComponent from './SassComponent';
import CSSModule from './CSSModule';

// function App() {
//   // orignal
//   return React.createElement(
//     "div",
//     null,
//     "Hello ",
//     React.createElement("b", null, "react")
//   );
// }

// function App() {
// 	// jsx
// 	const name = undefined;
// 	// return name || "값이 undefined 입니다"; // prevent undefined
// 	// return <div>{name}</div>; // prevent undefined
// 	// return <div>{name || "이 문구가 보이면 값이 undefined 입니다."}</div>;
// 	return (
// 		<div className={'react'}>
// 			{name || '이 문구가 보이면 값이 undefined 입니다.'}
// 		</div>
// 	);
// }

// 함수향 컴포넌트
// const App = () => {
// 	return (
// 		<>
// 			<MyComponent name={'wonhopark'}>리액트ㅋ</MyComponent>
// 			<Say />
// 			<EventPractice />
// 			<ValidationSample />
// 		</>
// 	);
// };

class App extends Component {
	render() {
		return (
			<div className="App">
				<CSSModule />
				<SassComponent />
				<header>Learn React</header>
				<IterationSample />
				<Counter />
				<Info />
				<Average />
			</div>
		);
	}
}

export default App;
