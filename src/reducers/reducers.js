import { GOT_POSTS, CREATE_SESSION } from './../actions/axios';

export function gotPosts(state = [], action) {
  const posts = action.payload

  if (action.type === GOT_POSTS)
    state = posts;

  return state
}

export function createSession(state = [], action) {
  alert(action.type)

  if (action.type === CREATE_SESSION) {
    //state = {...state, session: action.data}
    console.warn(action)
  }

  return state
}
