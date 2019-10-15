import { 
  SET_PERIOD,
  RECEIVED_HOTELS,
  REQUEST_HOTELS,
  HOTEL_SELECTED,
  WIZARD_NEXT_STEP,
  CHANGE_FIRSTNAME,
  CHANGE_LASTNAME,
  CHANGE_EMAIL
} from './actionTypes';

export const setPeriod = (startDate, endDate) => ({
  type: SET_PERIOD,
  payload: {
    startDate,
    endDate
  }
})

function requestHotels() {
  return {
    type: REQUEST_HOTELS
  }
}

function receivedHotels(hotelsList) {
  return {
    type: RECEIVED_HOTELS,
    payload: hotelsList
  }
}

export function fetchHotels() {
  return function (dispatch) {
    dispatch(requestHotels());
    return fetch(`https://my-json-server.typicode.com/AmineYaiche/booking/hotels`)
      .then(
        response => response.json(),
        error => console.error('ERROR: ' + error)
      )
      .then(
        hotelsList => dispatch(receivedHotels(hotelsList))
      );
  }
}

export function hotelSelected(hotel) {
  return {
    type: HOTEL_SELECTED,
    payload: hotel
  }
}

export function wizardChangeStep(stepNumber) {
  return {
    type: WIZARD_NEXT_STEP,
    payload: stepNumber
  }
}

export function changeFirstName(firstname) {
  return {
    type: CHANGE_FIRSTNAME,
    payload: firstname
  }
}

export function changeLastName(lastname) {
  return {
    type: CHANGE_LASTNAME,
    payload: lastname
  }
}

export function changeEmail(email) {
  return {
    type: CHANGE_EMAIL,
    payload: email
  }
}