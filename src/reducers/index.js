import { combineReducers }    from 'redux';
import { routeReducer }       from 'redux-simple-router';

import article  from './article';
import formDataReducer from './formData';
import clientsDataReducer from './clientsDataReducer';

export default combineReducers({
  routing: routeReducer,
  articleReducer: article,
  clientsDataReducer: clientsDataReducer
});
