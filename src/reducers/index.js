import { combineReducers }    from 'redux';
import { routeReducer }       from 'redux-simple-router';

import article  from './article';
import formDataReducer from './formData';

export default combineReducers({
  routing: routeReducer,
  articleReducer: article,
  formDataReducer: formDataReducer
});
