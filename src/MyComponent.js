import React from 'react';
import PropTypes from 'prop-types';

const array = [1, 2];
const [one, two] = array;
console.log(one, two);

const MyComponent = ({ name, children, favoriteNumber }) => {
	return (
		<div>
			프로퍼티 {name} <br />
			children 값은 {children} <br />
			좋아하는 숫자 {favoriteNumber}
		</div>
	);
};

export default MyComponent;

MyComponent.defaultProps = {
	name: '기본 이름',
};

MyComponent.propTypes = {
	name: PropTypes.string,
	favoriteNumber: PropTypes.number.isRequired,
};
