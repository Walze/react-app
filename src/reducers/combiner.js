import { combineReducers } from 'redux';
import { gotPosts, cookieHandler } from './reducers';
import { StoreCookie } from './storeCookie'

const allReducers = combineReducers({
  posts: gotPosts,
  session: StoreCookie,
  cookieHandler
});

export default allReducers
