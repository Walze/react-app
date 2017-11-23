
export function gotPosts(state = [], action) {
  const posts = action.payload

  if (action.type === "GOT_POSTS")
    posts.map(post => state = [...state, post])

  return state
}
