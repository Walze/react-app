import { combineReducers } from 'redux';
import { gotPosts, createSession } from './reducers';


const allReducers = combineReducers({
  posts: gotPosts,
  createSession
});

export default allReducers
