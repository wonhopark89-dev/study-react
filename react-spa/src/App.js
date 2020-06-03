import React from 'react';
import { Route, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profiles from './Profiles';

const App = () => {
	return (
		<div>
			<ul>
				<li>
					<Link to="/">홈</Link>
				</li>
				<li>
					<Link to="/about">소개</Link>
				</li>
				<li>
					<Link to="/profiles">정보</Link>
				</li>
			</ul>
			<hr />
			{/* exact 옵션이 true 여야 경로 일치 문제가 발생하지 않음 */}
			<Route path="/" component={Home} exact={true} />
			<Route path={['/about', '/info']} component={About} />
			{/* match.params.username  */}
			{/* <Route path="/profile/:username" component={Profile} /> */}
			<Route path="/profiles" component={Profiles} />
		</div>
	);
};

export default App;
