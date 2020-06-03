import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewsItem from './NewsItem';
import axios from 'axios';

const NewsListBlock = styled.div`
	box-sizing: border-box;
	padding-bottom: 3rem;
	width: 768px;
	margin: 0 auto;
	margin-top: 2rem;
	@media screen and (max-width: 768px) {
		width: 100%;
		padding-left: 1rem;
		padding-right: 1rem;
	}
`;

const sampleArticle = {
	title: '제목',
	description: '내용',
	url: 'https://google.com',
	urlToImage: 'https://via.placeholder.com/160',
};

const NewsList = ({ category }) => {
	const [articles, setArticles] = useState(null);
	const [loading, setLoading] = useState(false);

	// useEffect 를 사용하여 컴포넌트가 처음 렌더링 되는 시점에 api 요청
	useEffect(() => {
		// useEffect 안에서는 asyns/await 사용하면 안됨,
		// async 사용하는 함수 따로 선언
		const fetchData = async () => {
			setLoading(true);
			try {
				const query = category === 'all' ? '' : `&category=${category}`;
				const response = await axios.get(
					`http://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=9cafd8de3cb8480883e96b303c4fea59`,
				);
				setArticles(response.data.articles);
			} catch (err) {
				console.log(err);
			}
			setLoading(false);
		};
		fetchData();
	}, [category]);

	// 대기중일때
	if (loading) {
		return <NewsListBlock>대기 중...</NewsListBlock>;
	}

	// 아직 데이터가 설정되지 않았을 때
	if (!articles) {
		return null;
	}

	// 데이터가 유효할 때
	return (
		<NewsListBlock>
			{articles.map((tomato) => (
				<NewsItem key={tomato.url} article={tomato} />
			))}
		</NewsListBlock>
	);
};

export default NewsList;
