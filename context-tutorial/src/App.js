import React from 'react';
import ColorBox from './components/ColorBox';
import ColorContext from './contexts/color';

// Priovider 를 통해 기본값을 value 를 꼭 명시해줘야한다.
const App = () => {
	return (
		<div>
			<ColorContext.Provider value={{ color: 'red' }}>
				<div>
					<ColorBox />
				</div>
			</ColorContext.Provider>
		</div>
	);
};

export default App;
