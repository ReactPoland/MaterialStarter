import { combineReducers }    from 'redux';
import { routeReducer }       from 'redux-simple-router';

import formData from './formData';

export default combineReducers({
  routing: routeReducer,
  formData
});
