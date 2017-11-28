import cookie from 'react-cookies'

export const STORE_COOKIE = 'STORE_COOKIE'
export function storeCookie() {
    const session = cookie.load('sessionData');

    const Dispatcher = dispatch => dispatch({
        type: STORE_COOKIE,
        payload: session
    })

    if (session)
        return Dispatcher
    else
        return {
            type: ''
        }
}