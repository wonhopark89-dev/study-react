import React, { useState, useEffect, useReducer } from 'react';

function reducer(state, action) {
	return {
		...state,
		[action.name]: action.value,
	};
}

const Info = () => {
	const [state, dispatch] = useReducer(reducer, {
		name: '',
		nickname: '',
	});

	const { name, nickname } = state;

	// const [name, setName] = useState('');
	// const [nickname, setNickname] = useState('');

	// useEffect(() => {
	// 	console.log('렌더링 완료');
	// 	console.log({
	// 		name,
	// 		nickname,
	// 	});
	// });

	// useEffect(() => {
	// 	console.log('처음 마운트 될떄 만');
	// 	console.log({
	// 		name,
	// 		nickname,
	// 	});
	// }, []); // [] -> 처음에만 렌더링 될때만 실행, 업데이트 될때는 실행되지 않음

	// useEffect(() => {
	// 	console.log('name 만 업데이트 될 때');
	// 	console.log({
	// 		name,
	// 	});
	// }, [name]); // [name] -> name 값만 업데이트 될때 실행

	// const onChangeName = (e) => {
	// 	// console.log(e.target);
	// 	setName(e.target.value);
	// };

	// const onChangeNickname = (e) => {
	// 	setNickname(e.target.value);
	// };

	const onChange = (e) => {
		console.log(e.target);
		dispatch(e.target);
	};

	return (
		<div>
			<div>
				<input name="name" value={name} onChange={onChange} />
				<input name="nickname" value={nickname} onChange={onChange} />
			</div>
			<div>
				<div>
					<b>이름:</b> {name}
				</div>
				<div>
					<b>닉네임:</b> {nickname}
				</div>
			</div>
		</div>
	);
};

export default Info;
