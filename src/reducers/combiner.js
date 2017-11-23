import { combineReducers } from 'redux';
import { gotPosts } from './reducers';


const allReducers = combineReducers({
  posts: gotPosts,
});

export default allReducers
