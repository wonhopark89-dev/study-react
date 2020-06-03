import React from 'react';
import Categories from '../components/Categories';
import NewsList from '../components/NewsList';

const NewsPage = ({ match }) => {
	// 카테고리가 없으면 기본값으로 all
	const category = match.params.category || 'all';

	return (
		<>
			<Categories />
			<NewsList category={category} />
		</>
	);
};

export default NewsPage;
