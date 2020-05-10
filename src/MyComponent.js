import React from 'react';

const MyComponent = (props) => {
	return (
		<div>
			프로퍼티 {props.name} <br />
			children 값은 {props.children}
		</div>
	);
};

export default MyComponent;

MyComponent.defaultProps = {
	name: '기본 이름',
};
