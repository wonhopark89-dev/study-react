// 서버 사이드 렌더링 할때는 서버를 위한 엔트리 파일을 따로 생성해야함
import React from 'react';
import ReactDOMServer from 'react-dom/server';

// JSX 넣으면 렌더링 결과를 문자열로 반환
const html = ReactDOMServer.renderToString(
	<div>Hello Server Side Rendering !</div>,
);

console.log(html);
