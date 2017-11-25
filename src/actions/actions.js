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
  return dispatch =>
    axios.post('http://localhost:3001/user', user)
      .then(res => dispatch({
        type: 'CREATED_USER',
        payload: res.data
      }))
      .catch((err) => {
        if (err.response.data)
          console.error(err.response.data);
        else
          console.warn(err.response)
      });

}