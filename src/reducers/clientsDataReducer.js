const clientsDataReducer = (state = "", action) => {
	switch (action.type) {
		case 'RETURN_ALL_ARTICLES':
			return Object.assign({}, state);
		case 'CLIENTS_DATA_SHOW':
			let clientsData = action.payload.response;
			return Object.assign({}, clientsData);
		default:
			return state;
	}
}

export default clientsDataReducer