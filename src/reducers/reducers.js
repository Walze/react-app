import { GOT_POSTS, CREATE_SESSION, LOGGED_OUT } from './../actions/axios';
import cookie from 'react-cookies'
export function gotPosts(state = [], action) {
  const posts = action.payload

  if (action.type === GOT_POSTS)
    state = posts

  return state
}

export function cookieHandler(state = null, action) {
  if (action.type === CREATE_SESSION)
    cookie.save('sessionData', action.payload)

  if (action.type === LOGGED_OUT)
    cookie.remove('sessionData')


  return state
}
