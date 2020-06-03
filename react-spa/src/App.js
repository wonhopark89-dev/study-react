import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profiles from './Profiles';
import HistorySample from './HistorySample';

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
				<li>
					<Link to="/history">history 예제</Link>
				</li>
			</ul>
			<hr />
			<Switch>
				{/* exact 옵션이 true 여야 경로 일치 문제가 발생하지 않음 */}
				<Route path="/" component={Home} exact={true} />
				<Route path={['/about', '/info']} component={About} />
				{/* match.params.username  */}
				{/* <Route path="/profile/:username" component={Profile} /> */}
				<Route path="/profiles" component={Profiles} />
				<Route path="/history" component={HistorySample} />
				<Route
					render={({ location }) => (
						// path 를 지정하지 않으면 모든 상황에 렌더링 됨
						<div>
							<h2>이 페이지는 존재하지 않습니다.</h2>
							<p>{location.pathname}</p>
						</div>
					)}
				/>
			</Switch>
		</div>
	);
};

export default App;
