import React from 'react';
import { withRouter } from 'react-router-dom';
import WithRouterSample from './WithRouterSample';

const data = {
	python: {
		name: '파이썬',
		description: '파이썬 ~ ',
	},
	java: {
		name: '자바',
		description: '자바 ~ ',
	},
};
const Profile = ({ match }) => {
	const { username } = match.params;
	const profile = data[username];
	if (!profile) {
		return <div>데이터가 없어요 </div>;
	}
	return (
		<div>
			<h3>
				{username} ({profile.name})
			</h3>
			<p>{profile.description}</p>
			<WithRouterSample />
		</div>
	);
};

export default withRouter(Profile);
