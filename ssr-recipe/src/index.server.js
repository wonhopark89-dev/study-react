// 서버 사이드 렌더링 할때는 서버를 위한 엔트리 파일을 따로 생성해야함
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import { StaticRouter } from 'react-router-dom';
import App from './App';
import path from 'path';
import fs from 'fs';
// redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import rootReducer, { rootSaga } from './modules';
import PreloadContext from './lib/PreloadContext';
import { END } from 'redux-saga';

// yarn build 후 asset-manifest.json 파일 경로들을 조회합니다.
const manifest = JSON.parse(
	fs.readFileSync(path.resolve('./build/asset-manifest.json'), 'utf8'),
);

const chunks = Object.keys(manifest.files)
	.filter((key) => /chunk\.js$/.exec(key)) // chunk.js 로 끝나는 키를 찾아서
	.map((key) => `<script src="${manifest.files[key]}"></script>`) // 스크립트 태그로 변환하고
	.join(''); // 합침

function createPage(root, stateScript) {
	return `
		<!DOCTYPE html>
		<html lang="en">
		<head> 
			<meta charset="utf-8"/>
			<link rel="shortcut icon" href="/favicon.ico"/>
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1, shrink-to-fit=no"
			/>
			<meta name="theme-color" content="#000000"/>
			<title>React App</title>
			<link href="${manifest.files['main.css']}" rel="stylesheet"/>
		</head>
		<body>
			<noscript>You need to enable JavaScript to run this app.</noscript>
			<div id="root">
				${root}
			</div>
			${stateScript}
			<script src="${manifest.files['runtime-main.js']}"></script>
			${chunks}
			<script src="${manifest.files['main.js']}"></script>
		</body>
		</html>
	`;
}

const app = express();

// 서버 사이드 렌더링을 처리할 핸들러 함수
const serverRender = async (req, res, next) => {
	// 이 함수는 404가 떠야되는 상황에 404 를 띄우지 않고 서버 사이드를 렌더링을 해줌
	const context = {};
	const sagaMiddleware = createSagaMiddleware();

	const store = createStore(
		rootReducer,
		applyMiddleware(thunk, sagaMiddleware),
	);

	const sagaPromise = sagaMiddleware.run(rootSaga).toPromise();

	const preloadContext = {
		done: false,
		promises: [],
	};
	const jsx = (
		<PreloadContext.Provider value={preloadContext}>
			<Provider store={store}>
				<StaticRouter location={req.url} context={context}>
					<App />
				</StaticRouter>
			</Provider>
		</PreloadContext.Provider>
	);

	ReactDOMServer.renderToStaticMarkup(jsx); // markup 렌더링, 정적인 페이지 만들때
	store.dispatch(END);

	try {
		await sagaPromise; // 기존에 진행중이던 사가들이 모두 끝날 때까지 기다립니다.
		await Promise.all(preloadContext.promises); // 모든 프로미스를 기다립니다.
	} catch (e) {
		return res.status(500);
	}
	preloadContext.done = true;
	const root = ReactDOMServer.renderToString(jsx); // 렌더링을 하고
	// JSON 을 문자열로 변환하고 악성 스크립트가 실행되는 것을 방지하기 위해 < 를 치환처리
	// https://redux.js.org/recipes/server-rendering#security-considerations
	const stateString = JSON.stringify(store.getState()).replace(/</g, '\\u003c');
	const stateScript = `<script>__PRELOADED_STATE__=${stateString}</script>`; // 리덕스 초기상태를 스크립트로 주입

	res.send(createPage(root, stateScript)); // 클라이언트한테 결과물을 응답합니다.
};

const serve = express.static(path.resolve('./build'), {
	index: false, // "/" 경로에서 index.html 보여주지 않도록 설정
});

app.use(serve); // 순서 중요 !. serverRender 전에 위치해야함
app.use(serverRender);

// 5000 포트로 서버를 가동
app.listen(5000, () => {
	console.log('Running on http://localhost:5000');
});
