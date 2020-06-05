import React from 'react';
import ColorContext from '../contexts/color';

// Function as a child or Render Props
// 컴포넌트의 children 이 있어야할 자리에 jsx 문자열이 아닌 함수를 전달함
const ColorBox = () => {
	return (
		<ColorContext.Consumer>
			{(value) => (
				<div
					style={{
						width: '64px',
						height: '64px',
						backgroundColor: value.color,
					}}
				/>
			)}
		</ColorContext.Consumer>
	);
};

export default ColorBox;
