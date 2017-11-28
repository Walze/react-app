import { STORE_COOKIE } from './../actions/STORE_COOKIE'

export const StoreCookie = (state = {}, action) => {
    const sessionCookie = action.payload
    if (action.type === STORE_COOKIE)
        state = sessionCookie

    return state
}