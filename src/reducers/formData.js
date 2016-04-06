


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









/*
import { createReducer } from '../utils';

import {
 FORM_DATA_SUBMIT
} from 'constants/formConstantsList';

const initialState = new Map();

export default createReducer(initialState, {
 [FORM_DATA_SUBMIT]: (state, payload) => {
 console.info("payload", model);
 let inputText = payload;

   /// .......
   
   return [
   	...state, inputText
   ]
 }
});
*/