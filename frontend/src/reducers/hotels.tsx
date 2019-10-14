import { SET_PERIOD, RECEIVED_HOTELS, REQUEST_HOTELS } from '../actions/actionTypes'


export function setPeriod(state = {}, action) {
  if (action.type == SET_PERIOD) {
    return {
      ...state,
      ...action.payload
    }
  }
  return state
}

export function fetchingHotels(state = {
    fetching: false,
    hotels: []
  },
  action
) {
  if(action.type == RECEIVED_HOTELS) {

    console.log('RECEIVED');
    console.log(action)
  }
  switch (action.type) {
    case REQUEST_HOTELS:
      return Object.assign({}, state, {
        fetching: true
      })
    case RECEIVED_HOTELS:
      return Object.assign({}, state, {
        fetching: false,
        hotels: action.payload  
      })
  }
  return state;
}