import React, { useState, useMemo, useCallback } from 'react';

const getAverage = (numbers) => {
	console.log('평균값 계산중...');
	if (numbers.length === 0) {
		return 0;
	}

	const sum = numbers.reduce((a, b) => a + b);
	return sum / numbers.length;
};

const Average = () => {
	const [list, setList] = useState([]);
	const [number, setNumber] = useState('');

	const onChange = useCallback((e) => {
		setNumber(e.target.value);
	}, []); // 컴포넌트가 처음 렌더링 될때만 함수 생성

	const onInsert = useCallback(
		(e) => {
			const nextList = list.concat(parseInt(number));
			setList(nextList);
			setNumber('');
		},
		[list, number]
	); // number 혹은 list 가 바뀌었을 때만 함수 생성

	const avg = useMemo(() => getAverage(list), [list]); // list 의 배열이 바뀔때만 getAverage 함수가 호출된다.

	return (
		<div>
			<input value={number} onChange={onChange} />
			<button onClick={onInsert}>등록</button>
			<ul>
				{list.map((value, index) => (
					<li key={index}>{value}</li>
				))}
			</ul>
			<div>
				{/* <b>평균값:</b> {getAverage(list)} */}
				<b>평균값(useMemo): </b> {avg}
			</div>
		</div>
	);
};

export default Average;
