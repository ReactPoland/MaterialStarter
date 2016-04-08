const articleFromReducer = (state = {}, action) => {
	switch (action.type) {
		case 'RETURN_ALL_ARTICLES':
			return Object.assign({}, state);
		case 'ARTICLES_LIST_ADD':
			let articlesList = action.payload.response;
			return Object.assign({}, articlesList);
		case 'JOIN_ARRAY_DATA':
			let arrayElements = action.payload.data;
			console.info(arrayElements);
			console.info(typeof arrayElements);
			return arrayElements;
		default:
			return state;
	}
}

export default articleFromReducer