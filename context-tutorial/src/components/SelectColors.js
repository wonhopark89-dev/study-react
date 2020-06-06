import React from 'react';
import { ColorConsumer } from '../contexts/color';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const SelectColors = () => {
	return (
		<div>
			<h2>색상을 선택하세요</h2>
			<ColorConsumer>
				{({ actions }) => (
					<div style={{ display: 'flex' }}>
						{colors.map((color) => (
							<div
								key={color}
								style={{
									backgroundColor: color,
									width: '24px',
									height: '24px',
									cursor: 'pointer',
								}}
								onClick={() => actions.setColor(color)}
								onContextMenu={(e) => {
									e.preventDefault(); // 오른쪽 클릭 버튼 시 메뉴 무시
									actions.setSubcolor(color);
								}}
							/>
						))}
					</div>
				)}
			</ColorConsumer>
			<hr />
		</div>
	);
};

export default SelectColors;
