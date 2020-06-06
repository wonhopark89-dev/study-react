import React from 'react';
import ColorBox from './components/ColorBox';
import { ColorProvider } from './contexts/color';
import SelectColors from './components/SelectColors';

// Priovider 를 통해 기본값을 value 를 꼭 명시해줘야한다.
const App = () => {
	return (
		<div>
			<ColorProvider>
				<div>
					<SelectColors />
					<ColorBox />
				</div>
			</ColorProvider>
		</div>
	);
};

export default App;
