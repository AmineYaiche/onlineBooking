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
  ERROR_BOOKING_FORM,
  NO_ERROR_BOOKING_FORM,
} from '../actions/actionTypes'


export function setPeriod(state = {}, action) {
  if (action.type == SET_PERIOD) {
    return {
      ...action.payload
    }
  }

  if (action.type == VALIDATE_BOOKING) {
    return {};
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

  if (action.type == VALIDATE_BOOKING) {
    return { currentStep: 0 };
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
    case VALIDATE_BOOKING:
      return {
        email: "",
        firstname: "",
        lastname: ""
      }
  }
  return state;
}

export function validatedBooking(state = [], action) {
  if (action.type == VALIDATE_BOOKING) {
    console.log(action.payload)
    return [
      ...state,
      { ...action.payload }
    ];
  }
  return state;
}

export function errorBookingForm(state="", action) {
  if (action.type == ERROR_BOOKING_FORM) {
    return action.payload;
  }
  if (action.type == NO_ERROR_BOOKING_FORM) {
    return "";
  }
  return state;
}