import { combineReducers } from 'redux';
import { gotPosts } from './reducers';
import { StoreCookie } from './storeCookie'

const allReducers = combineReducers({
  posts: gotPosts,
  session: StoreCookie
});

export default allReducers
