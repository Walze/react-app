import { combineReducers } from 'redux';
import getUsers from './getUsers';


const allReducers = combineReducers({
  getUsers,
});

export default allReducers
