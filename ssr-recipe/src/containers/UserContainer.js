import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import User from '../components/User';
import { usePreloader } from '../lib/PreloadContext';
import { getUser } from '../modules/users';

const UserContainer = ({ id }) => {
	console.log(id);
	const user = useSelector((state) => state.users.user);
	const dispatch = useDispatch();

	usePreloader(() => dispatch(getUser(user))); // 서버 사이드 렌더링 할 때 API 호출
	useEffect(() => {
		if (user && user.id === parseInt(id, 10)) return; // 사용자가 존재하고, id 가 일치한다면 요청하지 않음, 10진수
		dispatch(getUser(id));
	}, [dispatch, id, user]); // id 가 바뀔 때 새로 요청해야함

	// 컨테이너 유효성 검사 후 return null 을 해야하는 경우에
	// null 대신 Preloader 반환 ( 서버 사이드 렌더링이기 때문에 null 이 아닌 Preloader 컴포넌트 렌더링하여 반환)
	if (!user) return null;
	return <User user={user} />;
};

export default UserContainer;
