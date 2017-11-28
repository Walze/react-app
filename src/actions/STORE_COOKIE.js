import cookie from 'react-cookies'

export const STORE_COOKIE = 'STORE_COOKIE'
export function storeCookie(sessionParam = null) {
  const session = cookie.load('sessionData');
  if (session || sessionParam)
    return {
      type: STORE_COOKIE,
      payload: session || sessionParam
    }

  else
    return { type: null }
}