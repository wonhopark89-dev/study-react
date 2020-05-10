import React from 'react';
import './App.css';
import MyComponent from './MyComponent';

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

const App = () => {
	return <MyComponent name={'wonhopark'}>리액트ㅋ</MyComponent>;
};

export default App;
