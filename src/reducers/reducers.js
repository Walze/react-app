import { GOT_POSTS, CREATE_SESSION } from './../actions/axios';
import cookie from 'react-cookies'


export function gotPosts(state = [], action) {
  const posts = action.payload

  if (action.type === GOT_POSTS)
    state = posts;

  return state
}

export function createSession(state = [], action) {

  if (action.type === CREATE_SESSION) {
    console.warn(action.payload)
    cookie.save('sessionData', action.payload)
  }

  return state
}
