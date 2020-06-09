// 서버 사이드 렌더링 할때는 서버를 위한 엔트리 파일을 따로 생성해야함
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import { StaticRouter } from 'react-router-dom';
import App from './App';

const app = express();

// 서버 사이드 렌더링을 처리할 핸들러 함수
const serverRender = (req, res, next) => {
	// 이 함수는 404가 떠야되는 상황에 404 를 띄우지 않고 서버 사이드를 렌더링을 해줌
	const context = {};
	const jsx = (
		<StaticRouter location={req.url} context={context}>
			<App />
		</StaticRouter>
	);
	const root = ReactDOMServer.renderToString(jsx); // 렌더링을 하고
	res.send(root); // 클라이언트한테 결과물을 응답합니다.
};

app.use(serverRender);

// 5000 포트로 서버를 가동
app.listen(5000, () => {
	console.log('Running on http://localhost:5000');
});
