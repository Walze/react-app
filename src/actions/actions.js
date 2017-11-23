import * as axios from 'axios';

export function getPosts() {
  return dispatch => {

    axios.get('http://localhost:3001/').then(res => {
      dispatch({
        type: 'GOT_POSTS',
        payload: res.data
      })
    })

  }
}