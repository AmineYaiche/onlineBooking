import {
  SET_PERIOD,
  RECEIVED_HOTELS,
  REQUEST_HOTELS,
  HOTEL_SELECTED,
  WIZARD_NEXT_STEP,
  CHANGE_EMAIL,
  CHANGE_FIRSTNAME,
  CHANGE_LASTNAME,
  VALIDATE_BOOKING,
} from '../actions/actionTypes'


export function setPeriod(state = {}, action) {
  if (action.type == SET_PERIOD) {
    return {
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

export function hotelSelected(state = {}, action) {
  if (action.type == HOTEL_SELECTED) {
    return action.payload
  }

  if (action.type == VALIDATE_BOOKING) {
    return {};
  }

  return state;
}

export function wizardStep(state = { currentStep: 0 }, action) {
  if (action.type == WIZARD_NEXT_STEP) {
    return { currentStep: action.payload };
  }
  return state;
}

export function userInfo(state = {
  email: "",
  firstname: "",
  lastname: ""
}, action) {
  switch (action.type) {
    case CHANGE_FIRSTNAME:
      return {
        ...state,
        firstname: action.payload
      }
    case CHANGE_LASTNAME:
      return {
        ...state,
        lastname: action.payload
      }
    case CHANGE_EMAIL:
      return {
        ...state,
        email: action.payload
      }
  }
  return state;
}

export function validatedBooking(state = [], action) {
  if (action.type == VALIDATE_BOOKING) {
    return [
      ...state,
      { ...action.payload }
    ];
  }
  return state;
}