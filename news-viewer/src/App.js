import React, { useState, useCallback } from 'react';
import axios from 'axios';
import NewsList from './components/NewsList';
import Categories from './components/Categories';
import { Route } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

// 라우터 사용 안할 때
// const App = () => {
// 	const [category, setCategory] = useState('all');
// 	const onSelect = useCallback((category) => setCategory(category), []);

// 	return (
// 		<>
// 			<Categories category={category} onSelect={onSelect} />
// 			<NewsList category={category} />
// 		</>
// 	);
// };

const App = () => {
	return <Route path="/:category?" component={NewsPage} />;
};

export default App;
