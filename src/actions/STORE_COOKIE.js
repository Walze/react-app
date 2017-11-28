import cookie from 'react-cookies'

export const STORE_COOKIE = 'STORE_COOKIE'
export function storeCookie() {
    const session = cookie.load('sessionData');
    return dispatch => dispatch({
        type: STORE_COOKIE,
        payload: session
    })
}