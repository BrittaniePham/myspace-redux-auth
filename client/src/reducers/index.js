import { combineReducers } from 'redux';
import user from './user';
import flash from './flash';
import posts from './posts';
import 'semantic-ui-css/semantic.min.css';

const rootReducer = combineReducers({
  user,
  flash,
  posts,
});

export default rootReducer;
