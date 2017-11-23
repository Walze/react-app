
export function gotPosts(state = [], action) {
  const posts = action.payload

  if (action.type === "GOT_POSTS")
    state = posts;

  return state
}
