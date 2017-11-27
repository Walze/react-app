import { GOT_POSTS, CREATE_SESSION } from './../actions/axios';
import Cookies from 'universal-cookie'


export function gotPosts(state = [], action) {
  const posts = action.payload

  if (action.type === GOT_POSTS)
    state = posts;

  return state
}

export function createSession(state = [], action) {
  const cookies = new Cookies()

  if (action.type === CREATE_SESSION) {
    //state = {...state, session: action.data}
    cookies.set('session', action.payload.session)
  }

  return state
}
