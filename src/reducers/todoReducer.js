const todoReducerItem = (state = {}, action) => {
	switch (action.type) {
		
		case 'ADD_TODO':
		
			let addTodoData = {
				id: action.id,
				text: action.text,
				completed: false
			};

			return Object.assign({}, addTodoData);
		case 'TOGGLE_TODO':
		if( state.id !== action.id ) {
			return state;
		}
		let toggleTodoData = {
			completed: !state.completed
		};
		return Object.assign({}, toggleTodoData);
		default:
			return state;
	}
}

export default todoReducerItem;