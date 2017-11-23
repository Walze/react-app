import * as axios from 'axios';

export function getPosts() {
  return dispatch =>
    axios.get('http://localhost:3001/').then(res => {
      dispatch({
        type: 'GOT_POSTS',
        payload: res.data
      })
    })
}

export function createUser(user) {
  user._id = new Date().getTime();
  return dispatch =>
    axios.post('http://localhost:3001/user', user).then(res => {
      console.log(res, 'response <<');
      dispatch({
        type: 'CREATED_USER',
        payload: res.data
      })
    })
}