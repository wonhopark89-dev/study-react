import React from 'react';
import qs from 'qs';

const About = ({ location }) => {
	const query = qs.parse(location.search, {
		ignoreQueryPrefix: true, // 문자열 맨 앞에 ? 를 생략함, 쿼리스트링을 문자열 객체로 변환
	});
	const showDetail = query.detail === 'true'; // 파싱한 문자열 'true' 와 같은지 확인
	return (
		<div>
			<h1>소개</h1>
			<p>이 프로젝트는 리액트 라우터 기초를 길습해 보는 예재 프로젝트.</p>
			{showDetail && <p>detail 값을 true로 설정함</p>}
		</div>
	);
};

export default About;
