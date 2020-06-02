import React from 'react';
import { Route } from 'react-router-dom';
import About from './About';
import Home from './Home';

const App = () => {
	return (
		<div>
			{/* exact 옵션이 true 여야 경로 일치 문제가 발생하지 않음 */}
			<Route path="/" component={Home} exact={true} />
			<Route path="/about" component={About} />
		</div>
	);
};

export default App;
