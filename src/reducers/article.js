const article = (state = {}, action) => {
	switch (action.type) {
		case 'RETURN_ALL_ARTICLES':
			return Object.assign({}, state);
		case 'ARTICLES_LIST_ADD':
			let articlesList = action.payload.response;
			return Object.assign({}, articlesList);
		default:
			return state;
	}
}

export default article