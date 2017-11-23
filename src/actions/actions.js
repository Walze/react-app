//import * as axios from 'axios';

// export function getPosts() {
//   return dispatch => {

//     axios.get('http://localhost:3001/').then(res => {
//       dispatch({
//         type: 'GOT_POSTS',
//         payload: res.data
//       })
//     })

//   }
// }

export const test = () => {
  console.log('kek');
  return {
    type: 'GOT_POSTS',
    payload: 'res.data'
  }
}