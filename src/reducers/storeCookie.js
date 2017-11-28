import { STORE_COOKIE } from './../actions/STORE_COOKIE'
import { LOGGED_OUT } from './../actions/axios'

export const StoreCookie = (state = {}, action) => {
    const session = action.payload
    if (action.type === STORE_COOKIE && session)
        state = session

    if (action.type === LOGGED_OUT)
        state = false

    return state
}