const todoReducerItem = (state = [], action) => {
	switch (action.type) {
		
		case 'ADD_TODO':
			
			let addTodoItem = {
				id: action.payload.id,
				text: action.payload.text,
				customText: "custom text",
				completed: false
			};
	
			return Object.assign({}, addTodoItem);
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