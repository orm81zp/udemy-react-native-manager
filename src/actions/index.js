import { ACTION_EMAIL_CHANGED } from './types'

export const emailChange = (text) => {
  return {
    type: ACTION_EMAIL_CHANGED,
    payload: text
  }
}
