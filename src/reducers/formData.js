


const formDataFromReducer = (state = {}, action) => {
	switch (action.type) {
		
		case 'FORM_DATA_SUBMIT':
		
			let formInputData = action.payload.model;
			return Object.assign({}, formInputData);
		default:
			return state;
	}
}

export default formDataFromReducer