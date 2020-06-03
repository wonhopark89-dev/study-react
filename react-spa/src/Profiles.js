import React from 'react';
import { Link, Route, NavLink } from 'react-router-dom';
import Profile from './Profile';

const Profiles = () => {
	const activeStyle = {
		background: 'black',
		color: 'white',
	};

	return (
		<div>
			<h3>사용자 목록 : </h3>
			<ul>
				<li>
					<NavLink activeStyle={activeStyle} to="/profiles/python" active>
						python
					</NavLink>
				</li>
				<li>
					<NavLink activeStyle={activeStyle} to="/profiles/java">
						java
					</NavLink>
				</li>
			</ul>

			<Route
				path="/profiles"
				exact={true}
				render={() => <div>정보를 선택해주세요 </div>}
			/>
			<Route path="/profiles/:username" component={Profile} />
		</div>
	);
};

export default Profiles;
