import { createReducer } from '../utils';

import {
 FORM_DATA_SUBMIT
} from 'constants/formData';

const initialState = new Map();

//need to write reducer that takes initial state , dispatch an action and takes action payload , and changes the
//initial state based on what action do and it should return new state( current state )
//first see what Kamil added, check actions, handler in the view and i need some functions and js to work, 
//change and render new view

export default createReducer(initialState, {
 [FORM_DATA_SUBMIT]: (state, payload) => {
 console.info("payload", model)
   /// .......
   return 
 }
});