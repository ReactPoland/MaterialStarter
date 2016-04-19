import { combineReducers }    from 'redux';
import { routeReducer }       from 'redux-simple-router';

import article  from './article';
import ToolbarReducer from './ToolbarReducer.js';

export default combineReducers({
  routing: routeReducer,
  article,
  ToolbarReducer
});
