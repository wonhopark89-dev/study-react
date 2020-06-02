import React, { useState, useRef, useCallback, useReducer } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';

function createBulkTodos() {
	const array = [];
	for (let i = 1; i <= 2500; i++) {
		array.push({
			id: i,
			text: `할 일 ${i}`,
			checked: false,
		});
	}
	return array;
}

function todoReducer(todos, action) {
	switch (action.type) {
		case 'INSERT': {
			// 새로추가
			// const expample = {
			// 	type: 'INSERT',
			// 	todo: { id: 1, text: 'todo', checked: false },
			// };
			return todos.concat(action.todo);
		}
		case 'REMOVE': {
			return todos.filter((todo) => todo.id !== action.id);
		}
		case 'TOGGLE': {
			return todos.map((todo) =>
				todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
			);
		}
		default: {
			return todos;
		}
	}
}

const App = () => {
	// const [todos, setTodos] = useState(createBulkTodos);

	/* useReducer 를 사용할땐 두 번째 파라미터에 초기 상태를 넣어 주어야 하는데,
	두번째에 undefined 넣고, 세번째 파라미터에 초기상태를 만들어주는 함수를 넣으면, 처음 렌더링할 때만 3번째 파라미터 함수 호출 */
	const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);

	// 교유값으로 사용될 id
	// ref 를 사용하여 변수 담기
	const nextId = useRef(2501);
	const onInsert = useCallback((text) => {
		const todo = {
			id: nextId.current,
			text,
			checked: false,
		};
		// setTodos((todos) => todos.concat(todo));
		dispatch({ type: 'INSERT', todo });
		nextId.current += 1; // nextId 1씩 더하기
	}, []);

	const onRemove = useCallback((id) => {
		// setTodos((todos) => todos.filter((tomato) => tomato.id !== id));
		dispatch({ type: 'REMOVE', id });
	}, []);

	const onToggle = useCallback((id) => {
		// setTodos((todos) =>
		// 	todos.map((tomato) =>
		// 		tomato.id === id ? { ...tomato, checked: !tomato.checked } : tomato,
		// 	),
		// );
		dispatch({ type: 'TOGGLE', id });
	}, []);

	return (
		<TodoTemplate>
			<TodoInsert onInsert={onInsert} />
			<TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
		</TodoTemplate>
	);
};

export default App;
