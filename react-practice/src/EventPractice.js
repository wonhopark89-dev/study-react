import React, { Component, useState } from 'react';

const EventPractice = () => {
	const [form, setForm] = useState({
		username: '',
		message: '',
	});

	const { username, message } = form;
	const onChange = (e) => {
		const nextForm = {
			...form, // 기존의 내용 복사
			[e.target.name]: e.target.value, // 원하는 값 덮어쓰기
		};
		setForm(nextForm);
	};

	const onClick = () => {
		alert(`${username}: ${message}`);
		setForm({
			username: '',
			message: '',
		});
	};

	const onKeyPress = (e) => {
		if (e.key === 'Enter') {
			onClick();
		}
	};
	return (
		<div>
			<h1>이벤트 연습</h1>
			<input
				type="text"
				name="username"
				placeholder="사용자명"
				value={username}
				onChange={onChange}

			/>
			<input
				type="text"
				name="message"
				placeholder="아무거나 ~ "
				value={message}
				onChange={onChange}
				onKeyPress={onKeyPress}
			/>
			<button onClick={onClick}>확인</button>
		</div>
	);
};

export default EventPractice;

// class EventPractice extends Component {
// 	state = {
// 		message: '',
// 	};

// 	constructor(props) {
// 		super(props);
// 		this.handleChange = this.handleChange.bind(this);
// 		this.handleClick = this.handleClick.bind(this);
// 	}

// 	handleChange(e) {
// 		this.setState({
// 			message: e.target.value,
// 		});
// 	}

// 	handleClick() {
// 		alert(this.state.message);
// 		this.setState({
// 			message: '',
// 		});
// 	}

// 	render() {
// 		return (
// 			<div>
// 				<h1>이벤트연습</h1>
// 				<input
// 					type="text"
// 					name="message"
// 					placeholder="아무거나 입력"
// 					value={this.state.message}
// 					onChange={this.handleChange}
// 				/>
// 				<button onClick={this.handleClick}>확인</button>
// 			</div>
// 		);
// 	}
// }
// 
// export default EventPractice;
