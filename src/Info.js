import React, { useState, useEffect } from 'react';

const Info = () => {
	const [name, setName] = useState('');
	const [nickname, setNickname] = useState('');

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

	useEffect(() => {
		console.log('name 만 업데이트 될 때');
		console.log({
			name,
		});
	}, [name]); // [name] -> name 값만 업데이트 될때 실행

	const onChangeName = (e) => {
		// console.log(e.target);
		setName(e.target.value);
	};

	const onChangeNickname = (e) => {
		setNickname(e.target.value);
	};
	return (
		<div>
			<div>
				<input value={name} onChange={onChangeName} />
				<input value={nickname} onChange={onChangeNickname} />
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
