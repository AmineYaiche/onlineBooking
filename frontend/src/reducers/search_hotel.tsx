import { SET_PERIOD } from '../actions/actionTypes'


export default function (state = {}, action) {
  if (action.type == SET_PERIOD) {
    return {
      ...state,
      ...action.payload
    }
  }
  return state
}