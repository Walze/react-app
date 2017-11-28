import * as axios from 'axios'

export const GOT_POSTS = 'GOT_POSTS'
export const CREATED_USER = 'CREATED_USER'
export const CREATE_SESSION = 'CREATE_SESSION'
export const LOGGED_OUT = 'LOGGED_OUT'

export function getPosts() {
  return dispatch =>
    axios.get('http://localhost:3001/').then(res =>
      dispatch({
        type: GOT_POSTS,
        payload: res.data
      }))
}

export function createUser(user) {
  return dispatch =>
    axios.post('http://localhost:3001/signup', user, { withCredentials: true })
      .then(res => dispatch({
        type: CREATED_USER,
        payload: res.data
      }))
      .catch(err => {
        console.error(err.response.data || err.response)
      })
}

export function loginUser(user) {
  return dispatch =>
    axios.post('http://localhost:3001/login', user, { withCredentials: true })
      .then(res => {
        console.log(res.data.session)
        dispatch({
          type: CREATE_SESSION,
          payload: res.data.session
        })
      })
      .catch(err => {
        console.error(err.response.data || err.response)
      })
}

export function loggout(e) {
  console.log(e)
  return dispatch =>
    axios.get('http://localhost:3001/kill', { withCredentials: true })
      .then(res => {
        alert(res.data)

        dispatch({
          type: LOGGED_OUT
        })
      })
      .catch(err => {
        console.error(err.response.data || err.response)
      })
}
