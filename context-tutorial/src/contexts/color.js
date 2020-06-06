import React, { createContext, useState } from 'react';

const ColorContext = createContext({
	state: { color: 'black', subcolor: 'red' },
	actions: {
		setColor: () => {},
		setSubcolor: () => {},
	},
});

const ColorProvider = ({ children }) => {
	const [color, setColor] = useState('black');
	const [subcolor, setSubcolor] = useState('red');

	const value = {
		state: { color, subcolor },
		actions: { setColor, setSubcolor },
	};

	return (
		<ColorContext.Provider value={value}>{children}</ColorContext.Provider>
	);
};

// const ColorConsumer = ColorContext.Consumer;
const { Consumer: ColorConsumer } = ColorContext; // 같은 표현

export { ColorProvider, ColorConsumer };

export default ColorContext;
