import React, { useContext } from 'react';
import ColorContext, { ColorConsumer } from '../contexts/color';

// Function as a child or Render Props
// 컴포넌트의 children 이 있어야할 자리에 jsx 문자열이 아닌 함수를 전달함
const ColorBox = () => {
	const { state } = useContext(ColorContext);
	return (
		<>
			<div
				style={{
					width: '64px',
					height: '64px',
					backgroundColor: state.color,
				}}
			/>
			<div
				style={{
					width: '32px',
					height: '32px',
					backgroundColor: state.subcolor,
				}}
			/>
		</>
	);
};

export default ColorBox;
