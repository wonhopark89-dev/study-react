import React, { useState } from 'react';

const IterationSample = () => {
	const [names, setNames] = useState([
		{
			id: 1,
			text: '눈사람',
		},
		{
			id: 2,
			text: '얼음',
		},
		{
			id: 3,
			text: '비',
		},
		{
			id: 4,
			text: '바람',
		},
	]);

	const [inputText, setInputText] = useState('');
	const [nextId, setNextId] = useState(5);

	const onRemove = (id) => {
		const nextNames = names.filter((tomato) => tomato.id !== id);
		setNames(nextNames);
		console.log(nextNames);
	};

	const onChange = (e) => setInputText(e.target.value);
	const onClick = () => {
		const nextNames = names.concat({
			id: nextId,
			text: inputText,
		});
		setNextId(nextId + 1);
		setNames(nextNames);
		setInputText('');
	};

	// index 를 키로 쓰면 배열이 변경될때 효율적으로 리렌더링 하지 못함
	// const nameList = names.map((tomato, index) => <li key={index}>{tomato}</li>);

	const nameList = names.map((tomato) => (
		<li key={tomato.id} onDoubleClick={() => onRemove(tomato.id)}>
			{tomato.text}
		</li>
	));
	return (
		<>
			<input value={inputText} onChange={onChange} />
			<button onClick={onClick}>추가</button>
			<ul>{nameList}</ul>;
		</>
	);
};
export default IterationSample;
