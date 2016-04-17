import { combineReducers }    from 'redux';
import { routeReducer }       from 'redux-simple-router';

import article  from './article';
import formDataReducer from './formData';
import todoReducer from './todoReducer';

export default combineReducers({
  routing: routeReducer,
  articleReducer: article,
  formDataReducer: formDataReducer,
  todoReducer: todoReducer
});
