import { createContext, useContext } from 'react';

// 클라이언트 환경 : null
// 서버 환경 : { done: false, promises: [] }

const PreloadContext = createContext(null);
export default PreloadContext;

// resolve는 함수 타입입니다.
// Preloader 컴포넌트는 resolve 라는 함수는 props 로 받아오고,
// 컴포넌트가 렌더링 될 때 서버환경에서만 resolve 함수를 호출함
export const Preloader = ({ resolve }) => {
    
	const preloadContext = useContext(PreloadContext);
	if (!preloadContext) return null; // context 값이 유효하지 않다면 아무것도 하지 않음
	if (preloadContext.done) return null; // 이미 작업이 끝났다면 아무것도 하지 않음

	// promises 배열에 프로미스 등록
	// 설령 resolve 함수가 프로미스를 반환하지 않더라도, 프로미스 취급을 하기위해
	// Promise.resolve 함수 사용
	preloadContext.promises.push(Promise.resolve(resolve()));
	return null;
};
