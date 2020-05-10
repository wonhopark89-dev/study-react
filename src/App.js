import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// function App() {
//   // orignal
//   return React.createElement(
//     "div",
//     null,
//     "Hello ",
//     React.createElement("b", null, "react")
//   );
// }

function App() {
	// jsx
	const name = undefined;
	// return name || "값이 undefined 입니다"; // prevent undefined
	// return <div>{name}</div>; // prevent undefined
	// return <div>{name || "이 문구가 보이면 값이 undefined 입니다."}</div>;
	return (
		<div className={'react'}>
			{name || '이 문구가 보이면 값이 undefined 입니다.'}
		</div>
	);
}

export default App;
